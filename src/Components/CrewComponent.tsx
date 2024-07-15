import React, { useState } from "react";
import douglas from "../assets/crew/image-douglas-hurley.webp";
import mark from "../assets/crew/image-mark-shuttleworth.webp";
import victor from "../assets/crew/image-victor-glover.webp";
import anna from "../assets/crew/image-anousheh-ansari.webp";
import Data from "../data.json";

function CrewComponent() {
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
    <div className=" mx-64 mt-48 flex h-96">
      <div className=" w-[calc(50%)] flex flex-col">
        <h4 className="heading4 text-white opacity-50">
          {crewData[pickedCrew].role}
        </h4>
        <h3 className="heading3">{crewData[pickedCrew].name}</h3>
        <p className="body-text text-secondary pr-32">
          {crewData[pickedCrew].bio}
        </p>

        <div className="flex gap-4 mt-24 absolute left-64 bottom-32">
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
      </div>
      <div className="absolute right-64 bottom-0">
        {pickedCrew === 0 ? (
          <img src={douglas} />
        ) : pickedCrew === 1 ? (
          <img src={mark} />
        ) : pickedCrew === 2 ? (
          <img src={victor} />
        ) : pickedCrew === 3 ? (
          <img src={anna} />
        ) : (
          <img src={anna} />
        )}
      </div>
    </div>
  );
}

export default CrewComponent;
