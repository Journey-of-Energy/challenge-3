import React, { useState } from "react";
import Data from "../../data.json";
import vehicle from "../../assets/technology/image-launch-vehicle-landscape.jpg";
import spaceport from "../../assets/technology/image-spaceport-landscape.jpg";
import capsule from "../../assets/technology/image-space-capsule-landscape.jpg";
import MobileMenu from "../ResponsiveMenus/MobileMenu";
import { motion } from "framer-motion";
const data = Data;
const technologyData = data.technology;
const images = [vehicle, spaceport, capsule];
const TechContainer: React.FC = (props: any) => {
  const index = props.index;
  const pickedTech = props.pickedTech;
  return (
    <div
      style={{
        display: index === pickedTech ? "flex" : "none",
        flexDirection: "column",
      }}
    >
      <motion.h3
        animate={{
          scale: index === pickedTech ? 1 : 0.8,
        }}
        className="heading3 mb-2"
      >
        {technologyData[index].name}
      </motion.h3>
      <motion.p
        animate={{
          opacity: pickedTech === index ? 1 : 0,
        }}
        className="body-text w-96 px-4"
      >
        {technologyData[index].description}
      </motion.p>
    </div>
  );
};
const ImgAnimation: React.FC = (props: any) => {
  const pickedTech = props.pickedTech;
  return (
    <>
      {images.map((item, index) => {
        console.log(item);
        return (
          <motion.img
            animate={{
              filter: index === pickedTech ? "blur(0px)" : "blur(5px)",
              opacity: index === pickedTech ? 1 : 0,
            }}
            transition={{ duration: 1 }}
            src={item}
            style={{ display: index === pickedTech ? "flex" : "none" }}
          />
        );
      })}
    </>
  );
};
function TechnologyMobile() {
  const [pickedTech, setPickedTech] = useState(0);
  return (
    <div className="">
      <div className="absolute w-full ">
        <MobileMenu />
      </div>

      <div className="flex flex-col items-center ">
        <div className="flex gap-4 mt-24 mb-8">
          <h5 className="heading5 text-white opacity-25">03</h5>
          <h5 className="heading5 text-white">SPACE LAUNCH 101</h5>
        </div>
        <ImgAnimation pickedTech={pickedTech} />

        <div className={`flex items-center gap-3 w-full justify-center  mt-8`}>
          <button
            className={`w-12 h-12 rounded-full border-secondary border-2 bg-${
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
            className={`w-12 h-12 rounded-full border-secondary border-2 bg-${
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
            className={`w-12 h-12 rounded-full border-secondary border-2 bg-${
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
        <div className="w-full mt-8 text-center">
          <h5 className="subheading2 text-secondary">THE TERMINOLOGY...</h5>
          {technologyData.map((_, index) => {
            return (
              <TechContainer
                key={index}
                pickedTech={pickedTech}
                index={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TechnologyMobile;
