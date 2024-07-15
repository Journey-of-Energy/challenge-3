import React from "react";
import deskImage from "../assets/home/background-home-desktop.jpg";
import tabletImage from "../assets/home/background-home-tablet.jpg";
import mobileImage from "../assets/home/background-home-mobile.jpg";
import Menu from "../Components/Menu";
import { useMediaQuery } from "react-responsive";
import HomeDesktop from "../Components/ResponsiveComponents/HomeDesktop";
import HomeTablet from "../Components/ResponsiveComponents/HomeTablet";
import HomeMobile from "../Components/ResponsiveComponents/HomeMobile";
import transition from "../transition";
function Home() {
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
      className="h-screen bg-cover bg-left overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {isDesktop ? <Menu homeBorder={border}></Menu> : ""}

      {isDesktop ? (
        <HomeDesktop />
      ) : isTablet ? (
        <HomeTablet />
      ) : isMobile ? (
        <HomeMobile />
      ) : (
        <HomeMobile />
      )}
    </div>
  );
}

export default transition(Home);
