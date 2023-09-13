import React from "react";
import { motion } from "framer-motion";
import "../styles/frame.css";

const Frame = () => {
  return (
    <div>
      <div
        style={{
          textAlign: "center",
          padding: "1rem",
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
          VIRTUAL VISIT
        </motion.h1>
      </div>
      <div className="d-flex justify-content-center mt-3">
        <iframe
          title="virtual-visit"
          width="1000"
          height="500"
          src="https://my.matterport.com/show/?m=Eba1G7Wskqo"
          allowFullScreen
          allow="xr-spatial-tracking"></iframe>
      </div>
    </div>
  );
};

export default Frame;
