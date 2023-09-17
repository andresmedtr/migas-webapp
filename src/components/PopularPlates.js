import React from "react";
import { motion } from "framer-motion";
import PlatesCarousel from "./Specialties/PlatesCarousel";

const PopularPlates = () => {
  return (
    <div data-aos="fade-up">
      <div
        style={{
          textAlign: "center",
          padding: "2rem",
          fontSize: "3rem",
        }}
        className="container">
        <motion.h1
          style={{
            marginTop: "5%",
            display: "flex",
            justifyContent: "center",
          }}
          className="borderBottom text-center"
          initial={{ opacity: 0, x: 0, y: -50 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 1 }}>
          HOUSE SIGNATURES
        </motion.h1>
      </div>
      <PlatesCarousel />
    </div>
  );
};

export default PopularPlates;
