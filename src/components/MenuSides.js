import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import sides from "../assets/menu/sides.jpg";
import "../styles/menusides.css";
import { motion } from "framer-motion";

const MenuSides = () => {
  const [showSides, setShowSides] = useState(false);
  const handleSides = () => {
    setShowSides(!showSides);
  };

  return (
    <div>
      <div className="d-flex justify-content-end me-4">
        <FontAwesomeIcon
          icon={faBars}
          onMouseEnter={handleSides}
          className={`btn btn-warning d-flex align-items-center fixedButton ${
            showSides && "d-none"
          }`}
          style={{ width: "2%" }}
        />
      </div>
      {showSides && (
        <motion.div
          className="fixedButton"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, x: -10 }}
          transition={{ duration: 1 }}>
          <div className="sides-container">
            <FontAwesomeIcon
              icon={faTimes}
              onClick={handleSides}
              className=" align-items-center closeButton"
            />
            <img className="sides-image" src={sides} alt="Sides" key="image" />
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default MenuSides;
