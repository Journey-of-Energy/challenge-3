import React, { useState } from "react";
import MobileMenu from "../ResponsiveMenus/MobileMenu";
import douglas from "../../assets/crew/image-douglas-hurley.webp";
import mark from "../../assets/crew/image-mark-shuttleworth.webp";
import victor from "../../assets/crew/image-victor-glover.webp";
import anna from "../../assets/crew/image-anousheh-ansari.webp";
import Data from "../../data.json";

function CrewMobile() {
  const data = Data;
  const crewData = data.crew;
  const [pickedCrew, setPickedCrew] = useState(0);
  const [active, setActive] = useState(false);
  const [number, setNumber] = useState(0);

  if (active === false) {
    setActive(true);
    setTimeout(() => {
      setNumber(() => number + 1);
      setPickedCrew(number);
      setActive(false);
      if (number === 3) {
        setNumber(0);
      }
    }, 5000);
  }

  return (
    <div className="">
      <MobileMenu />
      <div className="flex flex-col  h-[calc(100%)] mt-24 items-center">
        <div className=" w-full flex flex-col items-center">
          <div className="flex gap-4">
            <h5 className="heading5 text-white opacity-25">02</h5>
            <h5 className="heading5 text-white">MEET YOUR CREW</h5>
          </div>

          <div className="w-auto flex mt-8 mx-8 h-64 border-b-2 border-primary border-opacity-20 justify-center">
            {pickedCrew === 0 ? (
              <img src={douglas} className="flex-end object-contain" />
            ) : pickedCrew === 1 ? (
              <img src={mark} className="flex-end object-contain" />
            ) : pickedCrew === 2 ? (
              <img src={victor} className="flex-end object-contain" />
            ) : pickedCrew === 3 ? (
              <img src={anna} className="flex-end object-contain" />
            ) : (
              <img src={anna} className="flex-end object-contain" />
            )}
          </div>
          <div className="flex gap-4 mt-8">
            <div
              className={`w-3 h-3 rounded-full bg-white ${
                pickedCrew === 0 ? "opacity-1" : "opacity-20"
              } cursor-pointer`}
              onClick={() => setPickedCrew(0)}
            ></div>
            <div
              className={`w-3 h-3 rounded-full bg-white ${
                pickedCrew === 1 ? "opacity-1" : "opacity-20"
              } cursor-pointer`}
              onClick={() => setPickedCrew(1)}
            ></div>
            <div
              className={`w-3 h-3 rounded-full bg-white ${
                pickedCrew === 2 ? "opacity-1" : "opacity-20"
              } cursor-pointer`}
              onClick={() => {
                setPickedCrew(2);
              }}
            ></div>
            <div
              className={`w-3 h-3 rounded-full bg-white ${
                pickedCrew === 3 ? "opacity-1" : "opacity-20"
              } cursor-pointer`}
              onClick={() => setPickedCrew(3)}
            ></div>
          </div>
          <div className="flex flex-col text-center p-8">
            <h4 className="heading4 text-white opacity-50">
              {crewData[pickedCrew].role}
            </h4>
            <h3 className="heading3">{crewData[pickedCrew].name}</h3>
            <p className="body-text text-secondary ">
              {crewData[pickedCrew].bio}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CrewMobile;
