import MobileMenu from "../ResponsiveMenus/MobileMenu";
import { Link } from "react-router-dom";

function HomeMobile() {
  return (
    <div className="">
      <MobileMenu />

      <div className="flex px-8 justify-between absolute top-32 flex-col items-center">
        <div className="w-auto h-auto  flex flex-col text-center ">
          <h4 className="heading5 mb-2 text-secondary">
            SO, YOU WANT TO TRAVEL TO
          </h4>
          <h1 className="heading1 mb-4">SPACE</h1>
          <p className="body-text ">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <Link
          to="/destination"
          className={`bg-white w-48 h-48 rounded-full flex items-center justify-center text-primary z-5 mt-16`}
        >
          <h4 className="heading4">EXPLORE</h4>
          <div className=" w-72 h-72 rounded-full absolute mix-blend-overlay hover:bg-gray-700 transition-all duration-300 ease-in-out hover:w-64 hover:h-64 z-20"></div>
        </Link>
      </div>
    </div>
  );
}

export default HomeMobile;
