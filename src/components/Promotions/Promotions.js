import React from "react";
import PromotionsCarousel from "./PromotionsCarousel";
import menuData from "../../menus/menuData.json";

const Promotions = () => {
  return (
    <div data-aos="fade-up" className="w-100">
      <div
        className="borderBottom mt-5 container"
        style={{
          marginTop: "5%",
          display: "flex",
          justifyContent: "center",
        }}>
        <h1 className="text-center">SPECIALS</h1>
      </div>
      <PromotionsCarousel slide={menuData} />
    </div>
  );
};

export default Promotions;
