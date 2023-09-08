import React from "react";
import IFrame from "react-iframe";
import { motion } from "framer-motion";

const Frame = () => {
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
          VIRTUAL VISIT
        </motion.h1>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "3rem",
        }}>
        <iframe
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
