import React, { useState, useEffect } from "react";

export const Footer = () => {
  return (
    <div className="">
      <footer
        className="text-center text-white"
        style={{ backgroundColor: "#212529" }}>
        <div className="container">
          <section className="mt-5">
            <div className="row text-center d-flex justify-content-center pt-5">
              <a href="#aboutus" className="link">
                <div className="col-md-2">
                  <h6 className="text-uppercase font-weight-bold link">
                    About us
                  </h6>
                </div>
              </a>
              <div className="col-md-2">
                <h6 className="text-uppercase font-weight-bold">Contact</h6>
              </div>
            </div>
          </section>

          <hr className="" />

          <section className="">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-8">
                <p>
                  Crafted with care by 4Geeks Academy's dedicated students,
                  CarComparePro showcases our prowess and diligence. A fusion of
                  innovation and hard work, this is your premier solution,
                  exemplifying our unwavering commitment to excellence.
                </p>
              </div>
            </div>
          </section>
        </div>
      </footer>
    </div>
  );
};
