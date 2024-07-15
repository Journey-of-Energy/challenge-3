import React from "react";
import { Link } from "react-router-dom";
import { useTypewriter } from "use-typewriter-hook";

const TypeWriter: React.FC = (props) => {
  const targetText = props.text;

  const { textValue: typedText } = useTypewriter({
    targetText: targetText,
    autoStartDelay: 250,
    typingDelayMillis: props.delay,
  });
  return <div>{typedText}</div>;
};
function HomeDesktop() {
  return (
    <div className="flex px-64 justify-between absolute bottom-48  w-full">
      <div className="w-[calc(35%)] h-96   bottom-36 flex flex-col justify-end">
        <h4 className="heading5 mb-2 text-secondary">
          <TypeWriter text="SO, YOU WANT TO TRAVEL TO" delay={20} />
        </h4>
        <h1 className="heading1 mb-4">
          <TypeWriter text="SPACE" delay={100} />
        </h1>
        <p className="body-text " style={{ width: "24rem", height: "18rem" }}>
          <TypeWriter
            text="Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!"
            delay={4}
          />
        </p>
      </div>
      <Link
        className="bg-white w-72 h-72 rounded-full  bottom-36 flex items-center justify-center text-primary z-5 self-end"
        to={"/destination"}
      >
        <h4 className="heading4">EXPLORE</h4>
        <div className=" w-72 h-72 rounded-full absolute mix-blend-overlay hover:bg-gray-700 transition-all duration-300 ease-in-out hover:w-96 hover:h-96 z-20"></div>
      </Link>
    </div>
  );
}

export default HomeDesktop;
