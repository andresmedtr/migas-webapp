import React from "react";
import "../styles/order.css";
import { text } from "@fortawesome/fontawesome-svg-core";
import Uber from "../assets/ubereats.jpg";
import Doordash from "../assets/doordash.jpg";
import MobileModal from "../components/MobileModal";

const Order = () => {
  const redirectToApp = () => {
    const userAgent = navigator.userAgent.toLowerCase();
    const isMobileDevice = /mobile|android|ios|iphone|ipad/.test(userAgent);
    const appScheme = "app://"; // Replace with the actual app scheme

    if (isMobileDevice) {
      // Check if the app scheme can be opened (app is installed)
      const appLink = document.createElement("a");
      appLink.href = appScheme;
      document.body.appendChild(appLink);
      appLink.click();
      document.body.removeChild(appLink);
    } else {
      // Open the website in a new tab/window
      window.open("https://example.com", "_blank");
    }
  };

  return (
    <div>
      <MobileModal />
      <div className="titleContainer">
        <h2>Ordering</h2>
        <button>Pick/up</button>
        <button>Delivery</button>
      </div>
      <div style={{ textAlign: "start", marginLeft: "18rem" }}>Menu</div>
      <div style={{ textAlign: "end", marginRight: "18rem" }}>
        <a
          href="https://www.ubereats.com/store/migas/rMaZBuaLRfG7_Oq0-yUklg/c7cd2aeb-d461-4693-b7c1-be48838b547e?diningMode=DELIVERY"
          target="_blank">
          <button style={{ width: "5%" }}>
            <img style={{ width: "100%" }} src={Uber} alt="uber" />
          </button>
        </a>
        <a
          href="https://www.doordash.com/store/miga's-bread-deli-meat-&-wine-miramar-105895/?event_type=autocomplete&pickup=false"
          target="_blank">
          <button style={{ width: "5%" }}>
            <img
              style={{ width: "100%", height: "2rem" }}
              src={Doordash}
              alt="doordash"
            />
          </button>
        </a>
      </div>
    </div>
  );
};

export default Order;
