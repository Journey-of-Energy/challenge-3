import { useState } from "react";
import Data from "../../data.json";
import vehicle from "../../assets/technology/image-launch-vehicle-landscape.jpg";
import spaceport from "../../assets/technology/image-spaceport-landscape.jpg";
import capsule from "../../assets/technology/image-space-capsule-landscape.jpg";

import TabletMenu from "../ResponsiveMenus/TabletMenu";

function TechnologyTablet() {
  const data = Data;
  const technologyData = data.technology;

  const [pickedTech, setPickedTech] = useState(0);
  return (
    <div className="">
      <div className="absolute w-full ">
        <TabletMenu />
      </div>

      <div className="flex flex-col items-left center ">
        <div className="flex gap-4 mt-32 mb-8 items-left ml-8">
          <h5 className="heading5 text-white opacity-25">03</h5>
          <h5 className="heading5 text-white">SPACE LAUNCH 101</h5>
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
        <div className={`flex items-center gap-3 w-full justify-center  mt-12`}>
          <button
            className={`w-16 h-16 rounded-full border-secondary border-2 bg-${
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
          </button>
          <div
            className={`w-16 h-16 rounded-full border-secondary border-2 bg-${
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
            className={`w-16 h-16 rounded-full border-secondary border-2 bg-${
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
        <div className="w-full mt-8 text-center flex flex-col items-center gap-4">
          <h5 className="subheading2 text-secondary">THE TERMINOLOGY...</h5>
          <h3 className="heading3 mb-2">{technologyData[pickedTech].name}</h3>
          <p className="body-text w-full px-48">
            {technologyData[pickedTech].description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TechnologyTablet;
