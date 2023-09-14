import React from "react";
import { motion } from "framer-motion";
import PlatesCarousel from "./Specialties/PlatesCarousel";

const PopularPlates = () => {
  return (
    <div>
      <div
        style={{
          textAlign: "center",
          padding: "2rem",
          fontSize: "3rem",
        }}>
        <motion.h1
          style={{
            marginTop: "5%",
            display: "flex",
            justifyContent: "center",
          }}
          className="border-bottom border-warning text-center border-4"
          initial={{ opacity: 0, x: 0, y: -50 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ delay: 3, duration: 2 }}>
          SPECIALTIES
        </motion.h1>
      </div>
      <PlatesCarousel />
    </div>
  );
};

export default PopularPlates;
