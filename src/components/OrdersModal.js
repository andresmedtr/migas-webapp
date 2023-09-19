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
              <a
                href="https://www.finedinemenu.com/?utm_term=&utm_campaign=DSA+Campaign&utm_source=adwords&utm_medium=ppc&hsa_acc=4267882658&hsa_cam=16064939929&hsa_grp=136672907510&hsa_ad=645117759832&hsa_src=g&hsa_tgt=dsa-1463112770137&hsa_kw=&hsa_mt=&hsa_net=adwords&hsa_ver=3&gad=1&gclid=CjwKCAjw3oqoBhAjEiwA_UaLtrbWnwjNlq0k9HjMFajm2E08kPHEybVCVxyfrcdXoTBSS2UArisj1xoCD18QAvD_BwE"
                target="_blank"
                rel="noreferrer">
                <Button className="btn btn-warning">Order Now</Button>
              </a>
            </div>
          </div>
          <div className="col m-5">
            <h2
              className="text-center p-2"
              style={{ borderTop: "2px solid #b48303" }}>
              Delivery
            </h2>
            <div className="text-center">
              <a
                href="https://www.doordash.com/store/miga's-bread-deli-meat-&-wine-miramar-105895/?event_type=autocomplete&pickup=false"
                target="_blank"
                rel="noreferrer">
                <img
                  src={Doordash}
                  className="w-25 rounded"
                  alt="Doordash"></img>
              </a>
              <a
                href="https://www.ubereats.com/store/migas/rMaZBuaLRfG7_Oq0-yUklg/c7cd2aeb-d461-4693-b7c1-be48838b547e?diningMode=DELIVERY"
                target="_blank"
                rel="noreferrer">
                <img src={Uber} className="w-25 rounded ms-5" alt="Uber"></img>
              </a>
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
