import React, { useState } from "react";
import Uber from "../assets/ubereats.jpg";
import Doordash from "../assets/doordash.jpg";

const MobileModal = () => {
  const [showModal, setShowModal] = useState(true);

  return (
    <div className="">
      <div
        className={`${showModal ? "d-block" : "d-none"} d-lg-none modal`}
        tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Order from our apps</h5>
              <button
                onClick={() => setShowModal(false)}
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div>TOAST</div>
              <div>
                <a
                  href="https://www.ubereats.com/store/migas/rMaZBuaLRfG7_Oq0-yUklg/c7cd2aeb-d461-4693-b7c1-be48838b547e?diningMode=DELIVERY"
                  target="_blank">
                  <img style={{ width: "10%" }} src={Uber} alt="uber" />
                </a>
                <a
                  href="https://www.doordash.com/store/miga's-bread-deli-meat-&-wine-miramar-105895/?event_type=autocomplete&pickup=false"
                  target="_blank">
                  <img
                    style={{ width: "10%", height: "2rem" }}
                    src={Doordash}
                    alt="doordash"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileModal;
