import { useState } from "react";
import moon from "../../assets/destination/image-moon.webp";
import mars from "../../assets/destination/image-mars.webp";
import europa from "../../assets/destination/image-europa.webp";
import titan from "../../assets/destination/image-titan.webp";
import Data from "../../data.json";
import TabletMenu from "../ResponsiveMenus/TabletMenu";

function DestinationTablet() {
  const data = Data;
  const destinationData = data.destinations;

  const [pickedDestination, setPickedDestination] = useState(0);
  return (
    <div className="">
      <TabletMenu />

      <div className=" mt-8 flex flex-col py-8">
        <div className="flex gap-4 self-left my-8 ml-8 mt-16">
          <h5 className="heading5 text-white opacity-25">01</h5>
          <h5 className="heading5 text-white">PICK YOUR DESTINATION</h5>
        </div>
        <div className=" flex justify-center px-24 mb-16 mt-8">
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
        </div>
        <div className=" flex flex-col px-4  text-center">
          <div className="flex gap-8 justify-center mb-4 relative">
            <button
              className={`nav-text ${
                pickedDestination === 0 ? "text-white" : "text-secondary"
              }`}
              onClick={() => {
                setPickedDestination(0);
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
              }}
            >
              titan
            </button>
          </div>
          <h2 className="heading2">
            {destinationData[pickedDestination].name}
          </h2>
          <p className="body-text px-24">
            {destinationData[pickedDestination].description}
          </p>
          <div className="h-0.5 w-[calc(100%)] border-t-0 bg-white opacity-20 mt-8"></div>
          <div className="flex justify-around px-32 mt-8">
            <div className="flex flex-col gap-2">
              <p className="subheading2 text-secondary">avg. dist</p>
              <p className="subheading1">
                {destinationData[pickedDestination].distance}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="subheading2 text-secondary">est. travel time</p>
              <p className="subheading1">
                {destinationData[pickedDestination].travel}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DestinationTablet;
