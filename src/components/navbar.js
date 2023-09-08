import React, { useState } from "react";
import Logo from "../assets/Logo-Home.png";
import "../styles/navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [click, setClick] = useState(false);

  return (
    <div className="navbarContainer">
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{ height: "50%" }}>
        <div className="container-fluid">
          <Link to={"/"}>
            <p className="navbar-brand">
              <img className="logo" src={Logo} alt="Logo" />
            </p>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to={"/"} className="link">
                  <p className="nav-link" aria-current="page">
                    Home
                  </p>
                </Link>
              </li>

              <li className="nav-item">
                <p className="nav-link">Menu</p>
              </li>
              <Link to="/order" className="link">
                <li className="nav-item">
                  <p className="nav-link">Delivery/Pick-up</p>
                </li>
              </Link>
              <li className="nav-item">
                <p className="nav-link">Butchery</p>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <p className="nav-link">Contact</p>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
