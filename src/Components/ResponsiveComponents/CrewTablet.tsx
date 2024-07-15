import "swiper/css";
import "swiper/css/a11y";

import { A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import anna from "../../assets/crew/image-anousheh-ansari.webp";
import douglas from "../../assets/crew/image-douglas-hurley.webp";
import mark from "../../assets/crew/image-mark-shuttleworth.webp";
import victor from "../../assets/crew/image-victor-glover.webp";
import Data from "../../data.json";
import TabletMenu from "../ResponsiveMenus/TabletMenu";

function CrewTablet() {
  const data = Data;
  const crewData = data.crew;

  return (
    <div className="h-full ">
      <TabletMenu />
      <div className="flex flex-col  h-full ">
        <div className=" w-full flex flex-col pt-24  h-full ">
          <div className="flex gap-4 my-8 ml-8 self-left">
            <h5 className="heading5 text-white opacity-25">02</h5>
            <h5 className="heading5 text-white">MEET YOUR CREW</h5>
          </div>
          <Swiper
            modules={[A11y]}
            spaceBetween={50}
            slidesPerView={1}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={(swiper) => console.log(swiper.activeIndex)}
            className="w-full h-full flex "
          >
            <SwiperSlide className="">
              <div className="w-full flex h-full flex-col items-center justify-between">
                <div className="text-center px-8 mt-8">
                  <h4 className="heading4 text-white opacity-50">
                    {crewData[0].role}
                  </h4>
                  <h3 className="heading3">{crewData[0].name}</h3>
                  <p className="body-text text-secondary ">{crewData[0].bio}</p>
                </div>
                <div className="flex gap-4 mt-8">
                  <div
                    className={`w-3 h-3 rounded-full bg-white opacity-1 cursor-pointer`}
                  ></div>
                  <div
                    className={`w-3 h-3 rounded-full bg-white opacity-20 cursor-pointer`}
                  ></div>
                  <div
                    className={`w-3 h-3 rounded-full bg-white opacity-20 cursor-pointer`}
                  ></div>
                  <div
                    className={`w-3 h-3 rounded-full bg-white opacity-20 cursor-pointer`}
                  ></div>
                </div>
                <img src={douglas} className="" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div className="w-full flex h-full flex-col items-center justify-between">
                <div className="text-center px-8 mt-8">
                  <h4 className="heading4 text-white opacity-50">
                    {crewData[1].role}
                  </h4>
                  <h3 className="heading3">{crewData[1].name}</h3>
                  <p className="body-text text-secondary ">{crewData[1].bio}</p>
                </div>
                <div className="flex gap-4 mt-8">
                  <div
                    className={`w-3 h-3 rounded-full bg-white opacity-20 cursor-pointer`}
                  ></div>
                  <div
                    className={`w-3 h-3 rounded-full bg-white opacity-1 cursor-pointer`}
                  ></div>
                  <div
                    className={`w-3 h-3 rounded-full bg-white opacity-20 cursor-pointer`}
                  ></div>
                  <div
                    className={`w-3 h-3 rounded-full bg-white opacity-20 cursor-pointer`}
                  ></div>
                </div>
                <img src={mark} className="" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div className="w-full flex h-full flex-col items-center justify-between">
                <div className="text-center px-8 mt-8">
                  <h4 className="heading4 text-white opacity-50">
                    {crewData[1].role}
                  </h4>
                  <h3 className="heading3">{crewData[1].name}</h3>
                  <p className="body-text text-secondary ">{crewData[1].bio}</p>
                </div>
                <div className="flex gap-4 mt-8">
                  <div
                    className={`w-3 h-3 rounded-full bg-white opacity-20 cursor-pointer`}
                  ></div>
                  <div
                    className={`w-3 h-3 rounded-full bg-white opacity-20 cursor-pointer`}
                  ></div>
                  <div
                    className={`w-3 h-3 rounded-full bg-white opacity-1 cursor-pointer`}
                  ></div>
                  <div
                    className={`w-3 h-3 rounded-full bg-white opacity-20 cursor-pointer`}
                  ></div>
                </div>
                <img src={victor} className="" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div className="w-full flex h-full flex-col items-center justify-between">
                <div className="text-center px-8 mt-8">
                  <h4 className="heading4 text-white opacity-50">
                    {crewData[2].role}
                  </h4>
                  <h3 className="heading3">{crewData[2].name}</h3>
                  <p className="body-text text-secondary ">{crewData[2].bio}</p>
                </div>
                <div className="flex gap-4 mt-8">
                  <div
                    className={`w-3 h-3 rounded-full bg-white opacity-20 cursor-pointer`}
                  ></div>
                  <div
                    className={`w-3 h-3 rounded-full bg-white opacity-20 cursor-pointer`}
                  ></div>
                  <div
                    className={`w-3 h-3 rounded-full bg-white opacity-20 cursor-pointer`}
                  ></div>
                  <div
                    className={`w-3 h-3 rounded-full bg-white opacity-1 cursor-pointer`}
                  ></div>
                </div>
                <img src={anna} className="" />
              </div>
            </SwiperSlide>
          </Swiper>
          {/* 
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
          </div> */}
          {/* <div className="flex flex-col text-center p-8">
            <h4 className="heading4 text-white opacity-50">
              {crewData[pickedCrew].role}
            </h4>
            <h3 className="heading3">{crewData[pickedCrew].name}</h3>
            <p className="body-text text-secondary ">
              {crewData[pickedCrew].bio}
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default CrewTablet;
