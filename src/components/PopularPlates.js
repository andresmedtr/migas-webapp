import React from "react";
import { motion } from "framer-motion";
import PlatesCarousel from "./Specialties/PlatesCarousel";

const PopularPlates = () => {
  return (
    <div>
      <div>
        <motion.h1
          style={{
            display: "flex",
            justifyContent: "center",
            paddingBottom: "3rem",
          }}
          className=""
          initial={{ opacity: 0, x: 0, y: -50 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ delay: 3, duration: 2 }}>
          <h1 className="border-bottom border-warning w-75 text-center border-4">
            SPECIALTIES
          </h1>
        </motion.h1>
      </div>
      <PlatesCarousel />
    </div>
  );
};

export default PopularPlates;

{
  /* <div className="" key={index}>
<div className="">
  <img src={Ribeye} alt={item.name} style={{ width: "30%" }} />
  <div className="m-2">
    <h4 className="">{item.name}</h4>
    <p className="">{item.description}</p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">{item.price}</li>
  </ul>
</div>
</div> */
}
