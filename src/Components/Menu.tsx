import React from "react";
import Logo from "../assets/shared/logo.svg";
import { Link } from "react-router-dom";

function Menu(props) {
  return (
    <div className="pt-8 ">
      <div className="flex justify-between items-center ">
        <div className="absolute w-[calc(50%-18rem)] h-0.5 border-t-0 bg-white opacity-20 ml-64 z-30"></div>
        <div>
          <img className="ml-32" src={Logo} alt="logo"></img>
        </div>
        <nav
          className="w-[calc(50%+4rem)] h-20 backdrop-blur-2xl bg-gray-400/10 flex items-center justify-between pl-24 pr-48 gap-8"
          style={{ zIndex: 20 }}
        >
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
        </nav>
      </div>
    </div>
  );
}

export default Menu;
