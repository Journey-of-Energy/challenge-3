import { useState } from "react";

import Data from "../../data.json";
import MobileMenu from "../ResponsiveMenus/MobileMenu";
import ThreeComponent from "../ThreeComponent";
import { animated, useSpring } from "react-spring";
const NumberAnimation = ({ n }: any) => {
  const { num } = useSpring({
    from: { num: 0 },
    num: n,
    delay: 100,
    config: { mass: 1, tension: 20, friction: 10 },
  });

  const convNum = num.to((value) =>
    Intl.NumberFormat().format(Math.round(value))
  );
  return <animated.div>{convNum}</animated.div>;
};
function DestinationMobile() {
  const data = Data;
  const destinationData = data.destinations;

  const [pickedDestination, setPickedDestination] = useState(0);
  const defPos = {
    x: 0,
    y: 2,
    z: -8,
  };
  const [moonPos, setMoonPos] = useState({
    x: 0,
    y: 2,
    z: -2,
  });
  const [marsPos, setMarsPos] = useState({
    x: -10,
    y: -1,
    z: -0.7,
  });
  const [europaPos, setEuropaPos] = useState({
    x: -20,
    y: -1,
    z: -0.7,
  });
  const [titanPos, setTitanPos] = useState({
    x: -30,
    y: -1,
    z: -0.7,
  });
  return (
    <div className="h-full overflow-hidden">
      <MobileMenu />

      <div className=" mt-8 flex flex-col py-8">
        <div className="flex gap-4 self-center my-8 " style={{ zIndex: 2 }}>
          <h5 className="heading5 text-white opacity-25">01</h5>
          <h5 className="heading5 text-white">PICK YOUR DESTINATION</h5>
        </div>
        {/* <div className=" flex justify-center px-24 mb-8 ">
          {pickedDestination === 0 ? (
            <img src={moon} />
          ) : pickedDestination === 1 ? (
            <img src={mars} />
          ) : pickedDestination === 2 ? (
            <img src={europa} />
          ) : pickedDestination === 3 ? (
            <img src={titan} />
          ) : (
            <img src={titan} />
          )}
        </div> */}
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            zIndex: 0,
          }}
        >
          <ThreeComponent
            name={"moon"}
            moonPos={moonPos}
            marsPos={marsPos}
            europaPos={europaPos}
            titanPos={titanPos}
          />
        </div>
        <div className=" flex flex-col px-4 text-center" style={{ zIndex: 2 }}>
          <div className="mt-36">
            <div className="flex gap-8 justify-center relative mt-8">
              <button
                className={`nav-text ${
                  pickedDestination === 0 ? "text-white" : "text-secondary"
                }`}
                onClick={() => {
                  setPickedDestination(0);
                  setMoonPos(defPos);
                  setMarsPos({ x: -6, y: 2, z: -2 });
                  setEuropaPos({ x: -10, y: 2, z: -2 });
                  setTitanPos({ x: -14, y: 2, z: -2 });
                }}
              >
                moon
              </button>
              <div
                className={`nav-text ${
                  pickedDestination === 1 ? "text-white" : "text-secondary"
                }`}
                onClick={() => {
                  setPickedDestination(1);
                  setMarsPos(defPos);
                  setMoonPos({ x: 6, y: 2, z: -2 });
                  setEuropaPos({ x: -6, y: 2, z: -2 });
                  setTitanPos({ x: -10, y: 2, z: -2 });
                }}
              >
                mars
              </div>
              <button
                className={`nav-text ${
                  pickedDestination === 2 ? "text-white" : "text-secondary"
                }`}
                onClick={() => {
                  setPickedDestination(2);
                  setEuropaPos(defPos);
                  setMarsPos({ x: 6, y: 2, z: -2 });
                  setMoonPos({ x: 10, y: 2, z: -2 });
                  setTitanPos({ x: -6, y: 2, z: -2 });
                }}
              >
                europa
              </button>
              <button
                className={`nav-text ${
                  pickedDestination === 3 ? "text-white" : "text-secondary"
                }`}
                onClick={() => {
                  setPickedDestination(3);
                  setTitanPos(defPos);
                  setMarsPos({ x: 10, y: 2, z: -2 });
                  setMoonPos({ x: 14, y: 2, z: -2 });
                  setEuropaPos({ x: 6, y: 2, z: -2 });
                }}
              >
                titan
              </button>
            </div>
            <h2 className="heading2">
              {destinationData[pickedDestination].name}
            </h2>
            <p className="body-text ">
              {destinationData[pickedDestination].description}
            </p>
          </div>
          <div className="h-0.5 w-[calc(100%)] border-t-0 bg-white opacity-20 my-4"></div>
          <div className="flex flex-col items-center gap-2 mt-0">
            <div className="flex flex-col w-[calc(50%)]">
              <p className="subheading2 text-secondary">avg. dist</p>
              <p className="subheading1 flex gap-4 justify-center">
                {/* {destinationData[pickedDestination].distance} */}
                <NumberAnimation
                  n={parseInt(
                    destinationData[pickedDestination].distance
                      .replace(/\D/g, "")
                      .toString()
                  )}
                />
                {destinationData[pickedDestination].distance.replace(/\d/g, "")}
              </p>
            </div>
            <div className="flex flex-col w-[calc(50%)]">
              <p className="subheading2 text-secondary">est. travel time</p>
              <p className="subheading1 flex gap-4 justify-center">
                <NumberAnimation
                  n={parseInt(destinationData[pickedDestination].travel)}
                />
                {destinationData[pickedDestination].travel.replace(/\d/g, "")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DestinationMobile;
