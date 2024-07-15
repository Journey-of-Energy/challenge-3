import { AnimatePresence } from "framer-motion";
import Crew from "./Pages/Crew";
import Destination from "./Pages/Destination";
import Home from "./Pages/Home";
import Technology from "./Pages/Technology";

import { Route, Routes, useLocation } from "react-router-dom";

const App: React.FC = () => {
  const location = useLocation();
  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/technology" element={<Technology />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default App;

{
  /* <div className="bg-primary ">
<h1 className="heading1">EARTH</h1>
<h2 className="heading2">VENUS</h2>
<h3 className="heading3">JUPITER & SATURN</h3>
<h4 className="heading4">URANUS, NEPTUNE & PLUTO</h4>
<h5 className="heading5">SO, YOU WANT TO TRAVEL TO SPACE</h5>
<p className="subheading1">384,400 KM</p>
<p className="subheading2">AVG. DISTANCE</p>
<p className="nav-text">EUROPA</p>
<p className="body-text">
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
  hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet
  vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin
  laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor
  eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.Lorem ipsum
  dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit.
  Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel,
  dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet
  viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh.
  Nullam mollis. Ut justo. Suspendisse potenti.Lorem ipsum dolor sit
  amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque
  aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis
  vel, nisi.{" "}
</p>
</div> */
}
