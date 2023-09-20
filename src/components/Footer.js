import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer
      id="footer"
      className="text-center text-whit mt-5"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
      <div className="">
        <div className="row d-flex">
          <div className="col">
            <a href="#aboutus" className="link w-25">
              <p className="text-uppercase font-weight-bold link text-warning m-0 p-2">
                About us
              </p>
            </a>
          </div>

          <div className="col w-25">
            <Link to="/contact" className="" style={{ textDecoration: "none" }}>
              <p className="text-uppercase font-weight-bold text-warning m-0 p-2">
                Contact
              </p>
            </Link>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-lg-8">
            <p>
              Here at Miga's, we take honor in our beliefs, that's why we tried
              to make our best to show you all of this Restaurant's quality.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
