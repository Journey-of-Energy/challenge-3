import anna from "../../assets/crew/image-anousheh-ansari.webp";
import douglas from "../../assets/crew/image-douglas-hurley.webp";
import mark from "../../assets/crew/image-mark-shuttleworth.webp";
import victor from "../../assets/crew/image-victor-glover.webp";
import Data from "../../data.json";
import MobileMenu from "../ResponsiveMenus/MobileMenu";
import { motion, useDragControls, useMotionValue } from "framer-motion";
import { SetStateAction, useState } from "react";
import { Dispatch } from "react";
const data = Data;
const crewData = data.crew;
const images = [douglas, mark, anna, victor];
const SPRING_OPTIONS = {
  easings: "spring",
  mass: 30,
  stiffness: 400,
  damping: 50,
  duration: 0.4,
};
const ImageContainer: React.FC = (props: any) => {
  return (
    <div className="w-full flex flex-shrink-0 flex-col items-center ">
      <img
        src={images[props.index]}
        className="flex-end px-16 mt-8  h-64 object-fill"
      />

      <div className="text-center px-8 mt-8">
        <h4 className="heading4 text-white opacity-50">
          {crewData[props.index].role}
        </h4>
        <h3 className="heading3">{crewData[props.index].name}</h3>
        <p className="body-text text-secondary ">{crewData[props.index].bio}</p>
      </div>
    </div>
  );
};
const ImageList: React.FC<{ imgIndex: number }> = ({
  imgIndex,
}: {
  imgIndex: number;
}) => {
  return (
    <>
      {images.map((_, index) => {
        return (
          <motion.div
            key={index}
            animate={{
              opacity: index === imgIndex ? 1 : 0.2,
              scale: index === imgIndex ? 1 : 0.4,
            }}
            transition={SPRING_OPTIONS}
            className="w-full flex shrink-0"
          >
            <ImageContainer index={index} />
          </motion.div>
        );
      })}
    </>
  );
};
function CrewMobile() {
  const controls = useDragControls();
  const startDrag = (event: any) => {
    controls.start(event);
  };
  const [imgIndex, setImgIndex] = useState(0);

  const onDragStart = () => {};
  const TRASHOLD = 30;
  const onDragEnd = () => {
    const position = dragX.get();

    if (position >= TRASHOLD && imgIndex !== 0) {
      setImgIndex((prev) => prev - 1);
    } else if (position <= -TRASHOLD && imgIndex < images.length - 1) {
      setImgIndex((prev) => prev + 1);
    }
  };
  const dragX = useMotionValue(0);
  return (
    <div>
      <div style={{ zIndex: 3 }}>
        <MobileMenu />
      </div>
      <div className="flex flex-col  h-[calc(100%)] mt-24 items-center overflow-hidden">
        <div className=" w-full flex flex-col items-center">
          <div className="flex gap-4">
            <h5 className="heading5 text-white opacity-25">02</h5>
            <h5 className="heading5 text-white">MEET YOUR CREW</h5>
          </div>

          <motion.div
            style={{ zIndex: 2, touchAction: "none", x: dragX }}
            onPointerDown={startDrag}
            drag="x"
            dragControls={controls}
            className="w-full flex"
            dragConstraints={{ left: 0, right: 0 }}
            animate={{ translateX: `-${imgIndex * 100}%` }}
            onDragEnd={onDragEnd}
            transition={SPRING_OPTIONS}
          >
            <ImageList imgIndex={imgIndex} />
          </motion.div>
          <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} />
        </div>
      </div>
    </div>
  );
}

const Dots = ({
  imgIndex,
  setImgIndex,
}: {
  imgIndex: number;
  setImgIndex: Dispatch<SetStateAction<number>>;
}) => {
  return (
    <div className="gap-2 h-8 flex justify-between">
      {images.map((_, index) => {
        return (
          <button
            style={{ zIndex: 200 }}
            key={index}
            className={`w-3 h-3 mt-4 rounded-full transition-colors ${
              index === imgIndex ? "bg-white" : "bg-neutral-400"
            }`}
            onClick={() => {
              setImgIndex(index);
            }}
          />
        );
      })}
    </div>
  );
};

export default CrewMobile;
