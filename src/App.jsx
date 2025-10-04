import React, { useEffect, useState } from "react";
import NavBar from './Components/NavBar';
import AboutUs from './Components/AboutUs';
import Popular from './Components/Popular';
import OurTeam from './Components/OurTeam';
import Client from './Components/Client';
import Footer from "./Components/Footer"
import Carousel from "./Components/Carousel";

function App() {
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    setDisplay(window.innerWidth <= 900 ? true : false);
  });
  return (
    <>
      <NavBar display={display} />
      <AboutUs />
      <Popular />
      <OurTeam />
      <Client />
      <Carousel />
      <Footer />
    </>
  )
}

export default App
