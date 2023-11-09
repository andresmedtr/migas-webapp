import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import sides from "../assets/menu/sides.jpg";
import "../styles/menusides.css";
import { motion } from "framer-motion";

const MenuSides = () => {
  const [showSides, setShowSides] = useState(false);
  const handleSides = () => {
    setShowSides(!showSides);
  };

  return (
    <div className="w-50">
      <div className="d-flex justify-content-end me-4 ">
        <p
          onClick={handleSides}
          className={`sidesButton btn btn-warning ${showSides && "d-none"}`}>
          Sides
        </p>
      </div>
      {showSides && (
        <motion.div
          className="fixedButton"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: -10 }}
          transition={{ duration: 1 }}>
          <div className="sides-container">
            <FontAwesomeIcon
              icon={faTimes}
              onClick={handleSides}
              className=" align-items-center closeButton"
            />
            <img
              className="sides-image rounded-4"
              src={sides}
              alt="Sides"
              key="image"
            />
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default MenuSides;
