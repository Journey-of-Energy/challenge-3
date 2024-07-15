import React, { useState } from "react";
import Data from "../data.json";
import vehicle from "../assets/technology/image-launch-vehicle-portrait.jpg";
import spaceport from "../assets/technology/image-spaceport-portrait.jpg";
import capsule from "../assets/technology/image-space-capsule-portrait.jpg";
import { motion } from "framer-motion";

function TechnologyComponent() {
  const data = Data;
  const technologyData = data.technology;

  const [pickedTech, setPickedTech] = useState(0);

  return (
    <div className="flex">
      <div className={`flex flex-col items-center gap-8 w-24  ml-64 mt-24 `}>
        <div
          className={`w-24 h-24 rounded-full border-secondary border-2 bg-${
            pickedTech === 0 ? "white" : ""
          } 
           flex items-center justify-center cursor-pointer`}
          onClick={() => {
            setPickedTech(0);
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
            setPickedTech(1);
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
            setPickedTech(2);
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
      <div className="w-full mt-24 ml-24 ">
        <h5 className="subheading2 text-secondary">THE TERMINOLOGY...</h5>
        <h3 className="heading3">{technologyData[pickedTech].name}</h3>
        <p className="body-text w-96">
          {technologyData[pickedTech].description}
        </p>
      </div>

      <img
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

export default TechnologyComponent;
