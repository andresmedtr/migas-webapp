import React from "react";
import "../styles/order.css";
import { text } from "@fortawesome/fontawesome-svg-core";
import Uber from "../assets/ubereats.jpg";
import Doordash from "../assets/doordash.jpg";
import MobileModal from "../components/MobileModal";

const Order = () => {
  // const redirectToApp = () => {
  //   const userAgent = navigator.userAgent.toLowerCase();
  //   const isMobileDevice = /mobile|android|ios|iphone|ipad/.test(userAgent);
  //   const appScheme = "app://"; // Replace with the actual app scheme

  //   if (isMobileDevice) {
  //     // Check if the app scheme can be opened (app is installed)
  //     const appLink = document.createElement("a");
  //     appLink.href = appScheme;
  //     document.body.appendChild(appLink);
  //     appLink.click();
  //     document.body.removeChild(appLink);
  //   } else {
  //     // Open the website in a new tab/window
  //     window.open("https://example.com", "_blank");
  //   }
  // };

  return (
    <div className="d-flex pt-5">
      <div>
        <h1 className="pt-5">Order Now From Our Apps</h1>
      </div>
    </div>
  );
};

export default Order;
