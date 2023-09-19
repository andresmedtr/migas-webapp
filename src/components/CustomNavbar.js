import React, { useState } from "react";
import Logo from "../assets/Logo-Home.png";
import "../styles/navbar.css";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import OrdersModal from "./OrdersModal";

const CustomNavbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const handleShow = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="navbarContainer">
      <Navbar expand="lg" variant="dark" className="navBar">
        <Navbar.Brand as={Link} to="/" className="navbarLogo">
          <img className="logo-home" src={Logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle
          onClick={handleClick}
          aria-controls="navbarSupportedContent"
        />
        <Navbar.Collapse
          id="navbarSupportedContent"
          className="navbarItems"
          onClick={() => setClick(false)}>
          <Nav className="nav-items ms-auto">
            <Nav.Link as={Link} to="/" className="nav-link">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/menu" className="nav-link">
              Menu
            </Nav.Link>
            <Nav.Item className="nav-link" onClick={handleShow}>
              Order
            </Nav.Item>
            <Nav.Link as={Link} to="/butchery" className="nav-link">
              Butchery
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="nav-link">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <OrdersModal show={showModal} handleShow={handleShow} />
    </div>
  );
};
export default CustomNavbar;
