import { useEffect, useState } from "react";

import Data from "../data.json";
import ThreeComponent from "./ThreeComponent";
import { useSpring, animated } from "react-spring";
const NumberAnimation = ({ n }: any) => {
  Number.prototype.to = function (callback: any) {
    return callback(this);
  };
  const { num } = useSpring({
    from: { num: 0 },
    num: n,
    delay: 100,
    config: { mass: 1, tension: 20, friction: 10 },
  });
  // const convNum = num.to((n) => n.toFixed(0));
  const convNum = num.to((n) =>
    Intl.NumberFormat().format(parseInt(n.toFixed(0)))
  );

  return <animated.div>{convNum}</animated.div>;
};
function DestinationComponent() {
  const data = Data;
  const destinationData = data.destinations;

  const [pickedDestination, setPickedDestination] = useState(0);

  const defPos = {
    x: -3.7,
    y: -1,
    z: -0.7,
  };
  const [moonPos, setMoonPos] = useState({
    x: -3,
    y: -1,
    z: -0.7,
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

  useEffect(() => {
    setMoonPos(defPos);
    setMarsPos({ x: -40, y: -4, z: 0 });
  }, []);
  return (
    <div className=" mx-64 mt-24 flex py-8 ">
      {/* <div style={{ width: 450, height: 450 }}>
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
          zIndex: 1,
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
      <div className="w-[calc(35%)] "></div>

      <div
        className=" w-[calc(50%)] flex flex-col pl-24 "
        style={{ zIndex: "1" }}
      >
        <div className="flex gap-8 absolute mt-[calc(-3rem)]">
          <button
            className={`nav-text ${
              pickedDestination === 0 ? "text-white" : "text-secondary"
            }`}
            onClick={() => {
              setPickedDestination(0);
              setMoonPos(defPos);
              setMarsPos({
                x: defPos.x - 8,
                y: defPos.y - 2,
                z: Math.cos(defPos.z) * 2,
              });
              setEuropaPos({
                x: -20,
                y: -1,
                z: -0.7,
              });
              setTitanPos({
                x: -30,
                y: -6,
                z: -2,
              });
            }}
          >
            moon
          </button>
          <button
            className={`nav-text ${
              pickedDestination === 1 ? "text-white" : "text-secondary"
            }`}
            onClick={() => {
              setPickedDestination(1);
              setMoonPos({
                x: 20,
                y: Math.sin(defPos.y) * 3,
                z: Math.sin(defPos.z) * 20,
              });
              setMarsPos(defPos);
              setEuropaPos({
                x: -13,
                y: -1,
                z: -0.7,
              });
              setTitanPos({
                x: -30,
                y: -6,
                z: -2,
              });
            }}
          >
            mars
          </button>
          <button
            className={`nav-text ${
              pickedDestination === 2 ? "text-white" : "text-secondary"
            }`}
            onClick={() => {
              setPickedDestination(2);
              setMoonPos({
                x: 12,
                y: -10,
                z: -50,
              });
              setMarsPos({
                x: 48,
                y: -8,
                z: -35,
              });
              setEuropaPos(defPos);
              setTitanPos({
                x: -30,
                y: -6,
                z: -2,
              });
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
              setMoonPos({
                x: 7,
                y: -8,
                z: -55,
              });
              setMarsPos({
                x: 34,
                y: -10,
                z: -45,
              });
              setEuropaPos({
                x: 20,
                y: -6,
                z: -8,
              });
              setTitanPos(defPos);
            }}
          >
            titan
          </button>
        </div>
        <h2 className="heading2">{destinationData[pickedDestination].name}</h2>
        <p className="body-text">
          {destinationData[pickedDestination].description}
        </p>
        <div className="h-0.5 w-[calc(100%)] border-t-0 bg-white opacity-20 mt-8"></div>
        <div className="flex w-[calc(100%)] mt-8">
          <div className="flex flex-col w-[calc(50%)]">
            <p className="subheading2 text-secondary">avg. dist</p>
            <p
              className="subheading1"
              style={{
                display: "flex",
                gap: 6,
              }}
            >
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
            <p className="subheading1" style={{ display: "flex", gap: 4 }}>
              {/* {destinationData[pickedDestination].travel} */}
              <NumberAnimation
                n={parseInt(
                  destinationData[pickedDestination].travel.replace(/\D/g, "")
                )}
              />
              {destinationData[pickedDestination].travel.replace(/\d/g, "")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DestinationComponent;
