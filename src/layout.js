import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CustomNavbar from "./components/CustomNavbar";
import Home from "./views/Home";
import { Footer } from "./components/Footer";
import Butchery from "./views/Butchery";
import Menu from "./views/Menu";
import Contact from "./views/Contact";
import "./styles/index.css";

const basename = process.env.BASENAME || "";

function Layout() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  useEffect(() => {
    var w = window.innerWidth;
    var h = window.innerHeight;

    if (w < 320) {
      setIsSmallScreen(true);
    }
  }, []);

  return (
    <div className="App">
      <BrowserRouter basename={basename}>
        <CustomNavbar />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route
            element={<Butchery screen={isSmallScreen} />}
            path="/butchery"
          />
          <Route element={<Menu />} path="/menu" />
          <Route element={<Contact />} path="/contact" />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default Layout;
