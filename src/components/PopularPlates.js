import React from "react";
import menuData from "../menus/menuData.json";
import { motion } from "framer-motion";
import Ribeye from "../assets/asadodetiras.jpg";

const PopularPlates = () => {
  return (
    <div>
      <div>
        <motion.h1
          style={{ display: "flex", justifyContent: "center" }}
          className=""
          initial={{ opacity: 0, x: 0, y: -50 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ delay: 3, duration: 2 }}>
          <h1 className="border-bottom border-warning w-75 text-center border-4">
            SPECIALTIES
          </h1>
        </motion.h1>
      </div>
      <div className="d-flex" style={{ justifyContent: "space-evenly" }}>
        {menuData.specialties.map((item, index) => (
          <div key={index}>
            <div className="card" style={{ width: "18rem" }}>
              <img src={Ribeye} className="card-img-top" alt={item.name} />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.description}</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">{item.price}</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularPlates;
