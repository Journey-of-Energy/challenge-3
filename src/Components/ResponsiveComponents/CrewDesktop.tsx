import React, { useEffect, useState } from "react";
import douglas from "../../assets/crew/image-douglas-hurley.webp";
import mark from "../../assets/crew/image-mark-shuttleworth.webp";
import victor from "../../assets/crew/image-victor-glover.webp";
import anna from "../../assets/crew/image-anousheh-ansari.webp";
import Data from "../../data.json";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { useAnimate, useInView } from "framer-motion";

function CrewDesktop() {
  const data = Data;
  const crewData = data.crew;
  const [pickedCrew, setPickedCrew] = useState(0);
  const [active, setActive] = useState(false);
  const [number, setNumber] = useState(0);
  const [textScope, textAnimate] = useAnimate();
  const [roleScope, roleAnimate] = useAnimate();
  const [imgScope, imgAnimate] = useAnimate();

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const [text, setText] = useState(crewData[pickedCrew].name);
  const isTextInView = useInView(textScope);
  const isImgInView = useInView(textScope);

  let interval: any = null;
  let iteration = 0;

  useEffect(() => {
    if (!isTextInView) {
      roleAnimate(roleScope.current, { x: 0, opacity: 0.5 });
      textAnimate(
        textScope.current,
        { y: 0, x: 0, opacity: 1 },
        { delay: 0.2 }
      );
    }
  }, [isTextInView]);
  useEffect(() => {
    if (!isImgInView) {
      imgAnimate(imgScope.current, { y: 0, opacity: 1, scale: 1 });
    }
  }, [isImgInView]);
  const startAnimation = (inputText: any) => {
    clearInterval(interval);

    interval = setInterval(() => {
      setText((prevText) =>
        prevText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return inputText[index];
            }

            return letters[Math.floor(Math.random() * 26)];
          })
          .join("")
      );

      if (iteration >= inputText.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 20);
  };

  useEffect(() => {
    setText(crewData[pickedCrew].name);

    startAnimation(crewData[pickedCrew].name);
  }, [pickedCrew]);
  if (active === false) {
    setActive(true);
    // setTimeout(() => {
    //   setNumber(() => number + 1);
    //   setPickedCrew(number);
    //   setActive(false);

    //   //setText(crewData[pickedCrew + 1].name);

    //   if (number === 3) {
    //     setNumber(0);
    //     //setText(crewData[0].name);
    //   }
    // }, 5000);
  }
  const textAnimation = () => {
    roleAnimate(roleScope.current, { x: -500, opacity: 0 });
    textAnimate(textScope.current, { y: -1000, opacity: 0 }, { duration: 0.5 });
    imgAnimation();
  };
  const imgAnimation = () => {
    imgAnimate(
      imgScope.current,
      { opacity: 0, y: "100%", scale: 0 },
      { duration: 0.9 }
    );
  };
  return (
    <div className=" mx-64 mt-48 flex h-96">
      <div className=" w-[calc(60%)] flex flex-col">
        <div
          style={{
            minHeight: "20rem",
          }}
        >
          <div className="overflow-hidden">
            <h4 ref={roleScope} className="heading4 text-white opacity-50 ">
              {crewData[pickedCrew].role}
            </h4>
          </div>
          {/* <h3 className="heading3">{crewData[pickedCrew].name}</h3> */}
          <h3 className="heading3 w-full">{text}</h3>
          <div className="overflow-hidden ">
            <p
              ref={textScope}
              className="body-text w-[calc(70%)] text-secondary pr-32"
            >
              {crewData[pickedCrew].bio}
            </p>
          </div>
        </div>
        <div className="flex mt-8" style={{ flexDirection: "column", gap: 16 }}>
          <div className="flex justify-between w-24 ">
            <div
              className="w-5 h-5 cursor-pointer"
              onClick={() => {
                textAnimation();
                setTimeout(() => {
                  if (pickedCrew > 0) {
                    setPickedCrew((c) => c - 1);
                  } else if (pickedCrew === 0) {
                    setPickedCrew(3);
                  }
                }, 100);
              }}
            >
              <SlArrowLeft color={"#fff"} />
            </div>
            <div
              className="w-5 h-5 cursor-pointe"
              onClick={() => {
                textAnimation();
                setTimeout(() => {
                  if (pickedCrew < 3) {
                    setPickedCrew((c) => c + 1);
                  } else if (pickedCrew === 3) {
                    setPickedCrew(0);
                  }
                }, 100);
              }}
            >
              <SlArrowRight color={"#fff"} />
            </div>
          </div>
          <div className="flex gap-4  ">
            <div
              className={`w-3 h-3 rounded-full bg-white ${
                pickedCrew === 0 ? "opacity-1" : "opacity-20"
              } cursor-pointer`}
              onClick={() => {
                setPickedCrew(0);
                setActive(true);
              }}
            ></div>
            <div
              className={`w-3 h-3 rounded-full bg-white ${
                pickedCrew === 1 ? "opacity-1" : "opacity-20"
              } cursor-pointer`}
              onClick={() => {
                setPickedCrew(1);
                setActive(true);
              }}
            ></div>
            <div
              className={`w-3 h-3 rounded-full bg-white ${
                pickedCrew === 2 ? "opacity-1" : "opacity-20"
              } cursor-pointer`}
              onClick={() => {
                setPickedCrew(2);
                setActive(true);
              }}
            ></div>
            <div
              className={`w-3 h-3 rounded-full bg-white ${
                pickedCrew === 3 ? "opacity-1" : "opacity-20"
              } cursor-pointer`}
              onClick={() => {
                setPickedCrew(3);
                setActive(true);
              }}
            ></div>
          </div>
        </div>
      </div>
      <div className="overflow-y-hidden absolute right-64 bottom-0 h-[calc(100%)] flex items-end">
        <img
          ref={imgScope}
          src={
            pickedCrew === 0
              ? douglas
              : pickedCrew === 1
              ? mark
              : pickedCrew === 2
              ? victor
              : pickedCrew === 3
              ? anna
              : anna
          }
        />
      </div>
    </div>
  );
}

export default CrewDesktop;
