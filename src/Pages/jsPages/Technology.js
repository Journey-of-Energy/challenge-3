import React from "react";
import Menu from "../Components/Menu";

import { useMediaQuery } from "react-responsive";
import deskImage from "../assets/technology/background-technology-desktop.jpg";
import tabletImage from "../assets/technology/background-technology-tablet.jpg";
import mobileImage from "../assets/technology/background-technology-mobile.jpg";
import TechnologyDesktop from "../Components/ResponsiveComponents/TechnologyDesktop";
import TechnologyMobile from "../Components/ResponsiveComponents/TechnologyMobile";
import TechnologyTablet from "../Components/ResponsiveComponents/TechnologyTablet";
import transition from "../transition";
function Technology() {
  const border = "border-b-2 h-[calc(100%)] border-white items-center";
  const isDesktop = useMediaQuery({ query: "(min-width: 1441px)" });
  const isTablet = useMediaQuery({
    query: "(max-width: 1440px) and (min-width: 768px)",
  });
  const isMobile = useMediaQuery({ query: "max-width: 768px" });

  const bgImage = isDesktop
    ? deskImage
    : isTablet
    ? tabletImage
    : isMobile
    ? mobileImage
    : mobileImage;
  return (
    <div
      className="h-screen bg-cover bg-left overflow-hidden z-50"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {isDesktop ? <Menu crewBorder={border} /> : ""}
      {isDesktop ? (
        <div className="flex gap-4 ml-64 mt-32">
          <h5 className="heading5 text-white opacity-25">03</h5>
          <h5 className="heading5 text-white">SPACE LAUNCH 101</h5>
        </div>
      ) : (
        ""
      )}
      {isDesktop ? (
        <TechnologyDesktop />
      ) : isTablet ? (
        <TechnologyTablet />
      ) : isMobile ? (
        <TechnologyMobile />
      ) : (
        <TechnologyMobile />
      )}
    </div>
  );
}

export default transition(Technology);
