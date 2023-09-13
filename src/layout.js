import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CustomNavbar from "./components/CustomNavbar";
import Home from "./views/Home";
import Order from "./views/Order";
import { Footer } from "./components/Footer";

const basename = process.env.BASENAME || "";

function Layout() {
  return (
    <div className="App">
      <BrowserRouter basename={basename}>
        <CustomNavbar />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Order />} path="/order" />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default Layout;
