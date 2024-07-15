import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/shared/logo.svg";
import { Twirl as Hamburger } from "hamburger-react";

function MobileMenu(props) {
  const [posPerc, setPosPerc] = useState(100);
  const [display, setDisplay] = useState("none");
  const styles = { transform: `translate(${posPerc}%)`, display: `${display}` };

  return (
    <div className="absolute top-0 right-0  w-full h-full">
      <div className="flex items-center justify-between">
        <Link to="/">
          <img className="ml-4 mt-4" src={Logo} alt="logo"></img>
        </Link>
        <div className="absolute right-4 top-4 z-40">
          <Hamburger
            color="#d0d6f9"
            onToggle={(toggled) => {
              if (toggled) {
                // open a menu
                setDisplay("flex");
                setPosPerc(0);
              } else {
                // close a menu
                setDisplay("none");
                setPosPerc(100);
              }
            }}
          />
        </div>
        <nav
          className={`w-[calc(50%+4rem)] h-[calc(100vh)] z-30 absolute  top-0 right-0  backdrop-blur-2xl bg-gray-600/10 flex flex-col items-center justify-between pl-8 pr-8 gap-2`}
          style={styles}
        >
          <div className="h-48 flex flex-col justify-between mt-32">
            <Link
              to="/"
              className={`nav-text text-white font-extrabold flex gap-2 ${props.homeBorder}`}
            >
              00<p className="nav-text text-white font-normal">Home</p>
            </Link>
            <Link
              to="/destination"
              className={`nav-text text-white font-extrabold flex gap-2 ${props.destBorder}`}
            >
              01<p className="nav-text text-white font-thin">Destination</p>
            </Link>
            <Link
              to="/crew"
              className={`nav-text text-white font-extrabold flex gap-2 ${props.crewBorder}`}
            >
              02<p className="nav-text text-white font-normal">crew</p>
            </Link>
            <Link
              to="/technology"
              className={`nav-text text-white font-extrabold flex gap-2 ${props.techBorder}`}
            >
              03<p className="nav-text text-white font-normal">technology</p>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}
export default MobileMenu;
