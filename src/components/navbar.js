import React from "react";
import Logo from "../assets/Logo-Home.png";
import "../styles/navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark">
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
            <ul
              className="navbar-nav me-auto mb-2 mb-lg-0"
              style={{ marginRight: "0" }}>
              <Link to={"/"}>
                <li className="nav-item">
                  <p className="nav-link active" aria-current="page">
                    Home
                  </p>
                </li>
              </Link>
              <li className="nav-item">
                <p className="nav-link">Butchery</p>
              </li>
              <li>
                <p className="nav-link">Contact</p>
              </li>
              <li>
                <p className="nav-link">Menu</p>
              </li>
              <Link to="/order">
                <li>
                  <p className="nav-link">Delivery/Pick-up</p>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
