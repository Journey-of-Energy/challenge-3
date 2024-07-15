import Menu from "../Components/Menu";
import deskImage from "../assets/destination/background-destination-desktop.jpg";
import tabletImage from "../assets/destination/background-destination-tablet.jpg";
import mobileImage from "../assets/destination/background-destination-mobile.jpg";
import DestinationComponent from "../Components/DestinationComponent";

import { useMediaQuery } from "react-responsive";
import DestinationMobile from "../Components/ResponsiveComponents/DestinationMobile";
import DestinationTablet from "../Components/ResponsiveComponents/DestinationTablet";
import transition from "../transition";
function Destination() {
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
      className="h-screen bg-cover bg-left absolute w-full"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {isDesktop ? <Menu destBorder={border}></Menu> : ""}
      {isDesktop ? (
        <div className="flex gap-4 ml-64 mt-32">
          <h5 className="heading5 text-white opacity-25">01</h5>
          <h5 className="heading5 text-white">PICK YOUR DESTINATION</h5>
        </div>
      ) : (
        ""
      )}

      {isDesktop ? (
        <DestinationComponent />
      ) : isTablet ? (
        <DestinationTablet />
      ) : isMobile ? (
        <DestinationMobile />
      ) : (
        <DestinationMobile />
      )}
    </div>
  );
}

export default transition(Destination);
