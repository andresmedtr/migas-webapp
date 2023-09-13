import React, { useState } from "react";
import Logo from "../assets/Logo-Home.png";
import "../styles/navbar.css";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const CustomNavbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <div className="navbarContainer">
      <Navbar expand="lg" variant="dark">
        <Navbar.Brand as={Link} to="/">
          <img className="logo-home" src={Logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle
          onClick={handleClick}
          aria-controls="navbarSupportedContent"
        />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/" className="nav-link">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/menu" className="nav-link">
              Menu
            </Nav.Link>
            <Nav.Link as={Link} to="/order" className="nav-link">
              Delivery/Pick-up
            </Nav.Link>
            <Nav.Link as={Link} to="/butchery" className="nav-link">
              Butchery
            </Nav.Link>
            <Nav.Link as={Link} to="#footer" className="nav-link">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
export default CustomNavbar;
