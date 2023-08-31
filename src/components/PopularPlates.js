import React from "react";
import menuData from "../menus/menuData.json";

const PopularPlates = () => {
  return (
    <div>
      <div>
        {menuData.specialties.map((item, index) => (
          <p key={index}>{item.name}</p>
        ))}
        ;
      </div>
    </div>
  );
};

export default PopularPlates;
