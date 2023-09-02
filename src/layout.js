import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./views/Home";
import Order from "./views/Order";

const basename = process.env.BASENAME || "";

function Layout() {
  return (
    <div className="App">
      <BrowserRouter basename={basename}>
        <Navbar />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Order />} path="/order" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Layout;