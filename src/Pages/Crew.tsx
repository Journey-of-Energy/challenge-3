import Menu from "../Components/Menu";
import { useMediaQuery } from "react-responsive";
import deskImage from "../assets/crew/background-crew-desktop.jpg";
import tabletImage from "../assets/crew/background-crew-tablet.jpg";
import mobileImage from "../assets/crew/background-crew-mobile.jpg";
import CrewDesktop from "../Components/ResponsiveComponents/CrewDesktop";
import CrewMobile from "../Components/ResponsiveComponents/CrewMobile";
import CrewTablet from "../Components/ResponsiveComponents/CrewTablet";
import transition from "../transition";

function Crew() {
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
      className="h-screen w-screen bg-cover bg-left absolute"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {isDesktop ? <Menu crewBorder={border} /> : ""}
      {isDesktop ? (
        <div className="flex gap-4 ml-64 mt-32">
          <h5 className="heading5 text-white opacity-25">02</h5>
          <h5 className="heading5 text-white">MEET YOUR CREW</h5>
        </div>
      ) : (
        ""
      )}

      {isDesktop ? (
        <CrewDesktop />
      ) : isTablet ? (
        <CrewTablet />
      ) : isMobile ? (
        <CrewMobile />
      ) : (
        <CrewMobile />
      )}
    </div>
  );
}

export default transition(Crew);
