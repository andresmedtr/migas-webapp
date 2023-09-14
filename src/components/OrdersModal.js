import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Doordash from "../assets/doordash.jpg";
import Uber from "../assets/ubereats.jpg";
import "../styles/order.css";

const OrdersModal = ({ show, handleShow }) => {
  const handleClose = () => {
    handleShow();
  };
  return (
    <div className="custom-modal">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header
          closeButton
          className="border-2 border-bottom border-warning">
          <Modal.Title className="w-100">
            <h3 className="text-center">Order Now From Our Apps</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body justify-content-around">
          <div className="col mt-5 m-5">
            <h2 className="text-center">Take-Out</h2>
            <div className="text-center">
              <Button className="btn btn-warning">Order Now</Button>
            </div>
          </div>
          <div className="col m-5">
            <h2 className="text-center">Delivery</h2>
            <div className="text-center">
              <img src={Doordash} className="w-25" alt="Doordash"></img>
              <img src={Uber} className="w-25" alt="Uber"></img>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="border-2 border-top border-warning">
          <Button className="btn btn-secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default OrdersModal;
