import { useEffect, useState } from "react";
import Data from "../../data.json";
import vehicle from "../../assets/technology/image-launch-vehicle-portrait.jpg";
import spaceport from "../../assets/technology/image-spaceport-portrait.jpg";
import capsule from "../../assets/technology/image-space-capsule-portrait.jpg";
import { useAnimate, useInView } from "framer-motion";
function TechnologyDesktop() {
  const data = Data;
  const technologyData = data.technology;
  const [scope, animate] = useAnimate();
  const [textScope, textAnimate] = useAnimate();
  const [headingScope, headingAnimate] = useAnimate();
  const [pickedTech, setPickedTech] = useState(0);
  const isInView = useInView(scope);
  const textIsInView = useInView(textScope);

  useEffect(() => {
    if (!isInView) {
      animate(scope.current, { opacity: 1, x: 0, scale: 1 });
    }
    if (!textIsInView) {
      textAnimate(textScope.current, { opacity: 1, x: 0 });
      headingAnimate(
        headingScope.current,
        { opacity: 1, y: 1 },
        { delay: 0.2 }
      );
    }
  }, [isInView, textIsInView]);

  const changeImg = (num: number) => {
    animate(
      scope.current,
      { opacity: 0, x: 500, dislay: "none", scale: 0 },
      { delay: 0.2 }
    );
    changeText();
    setTimeout(() => {
      setPickedTech(num);
    }, 300);
  };
  const changeText = () => {
    textAnimate(textScope.current, { opacity: 0, x: -2000 }, { delay: 0.2 });
    headingAnimate(headingScope.current, { y: -200 }, { duration: 0.4 });
  };
  return (
    <div className="flex">
      <div className={`flex flex-col items-center gap-8 w-24  ml-64 mt-24 `}>
        <div
          className={`w-24 h-24 rounded-full border-secondary border-2 bg-${
            pickedTech === 0 ? "white" : ""
          } 
             flex items-center justify-center cursor-pointer`}
          onClick={() => {
            changeImg(0);
          }}
        >
          <h4
            className={`heading4 text-${
              pickedTech === 0 ? "primary" : "white"
            }`}
          >
            1
          </h4>
        </div>
        <div
          className={`w-24 h-24 rounded-full border-secondary border-2 bg-${
            pickedTech === 1 ? "white" : ""
          }   flex items-center justify-center cursor-pointer`}
          onClick={() => {
            changeImg(1);
          }}
        >
          <h4
            className={`heading4 text-${
              pickedTech === 1 ? "primary" : "white"
            }`}
          >
            2
          </h4>
        </div>
        <div
          className={`w-24 h-24 rounded-full border-secondary border-2 bg-${
            pickedTech === 2 ? "white" : ""
          }  flex items-center justify-center cursor-pointer`}
          onClick={() => {
            changeImg(2);
          }}
        >
          <h4
            className={`heading4 text-${
              pickedTech === 2 ? "primary" : "white"
            }`}
          >
            3
          </h4>
        </div>
      </div>
      <div className="overflow-hidden w-full mt-24  ml-24">
        <h5 className="subheading2 text-secondary">THE TERMINOLOGY...</h5>
        <div className="" ref={textScope}>
          <h3 className="heading3">{technologyData[pickedTech].name}</h3>

          <div className="overflow-hidden">
            <p className="body-text w-96" ref={headingScope}>
              {technologyData[pickedTech].description}
            </p>
          </div>
        </div>
      </div>
      <img
        ref={scope}
        src={
          pickedTech === 0
            ? vehicle
            : pickedTech === 1
            ? spaceport
            : pickedTech === 2
            ? capsule
            : ""
        }
      />
    </div>
  );
}

export default TechnologyDesktop;
