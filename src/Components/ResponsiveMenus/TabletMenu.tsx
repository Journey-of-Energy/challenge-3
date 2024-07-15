import { Link } from "react-router-dom";
import Logo from "../../assets/shared/logo.svg";

function TabletMenu(props: any) {
  return (
    <div className="absolute top-0 right-0  w-full">
      <div className="flex items-center justify-between">
        <div>
          <img className="ml-8" src={Logo} alt="logo"></img>
        </div>
        <nav className="w-[calc(50%+4rem)] h-20 backdrop-blur-2xl bg-gray-600/10 flex items-center justify-between pl-8 pr-8 gap-2">
          <Link
            to="/"
            className={`nav-text text-white font-extrabold flex gap-2 ${props.homeBorder}`}
          >
            <p className="nav-text text-white font-normal">Home</p>
          </Link>
          <Link
            to="/destination"
            className={`nav-text text-white font-extrabold flex gap-2 ${props.destBorder}`}
          >
            <p className="nav-text text-white font-thin">Destination</p>
          </Link>
          <Link
            to="/crew"
            className={`nav-text text-white font-extrabold flex gap-2 ${props.crewBorder}`}
          >
            <p className="nav-text text-white font-normal">crew</p>
          </Link>
          <Link
            to="/technology"
            className={`nav-text text-white font-extrabold flex gap-2 ${props.techBorder}`}
          >
            <p className="nav-text text-white font-normal">technology</p>
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default TabletMenu;
