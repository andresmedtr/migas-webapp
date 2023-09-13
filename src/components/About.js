import React from "react";
import { useEffect, useRef } from "react";
import Migas from "../assets/migasFront.mp4";
import "../styles/about.css";
import { motion } from "framer-motion";
import Frame from "./Frame";

const About = () => {
  // const { scrollYProgress } = useScroll();
  // const scale = useTransform(scrollYProgress, [0, 2], [1, 2]);
  const videoRef = useRef();
  useEffect(() => {
    videoRef.current.play();
  }, []);

  return (
    <div style={{ height: "auto" }}>
      <motion.div
        className="scrollContainer"
        style={{
          height: "auto",
          fontSize: "1.5rem",
          // opacity: scrollYProgress,
          // transform: `scale(${scale})`,
        }}>
        <div className="title">
          <motion.h1
            style={{ display: "flex", justifyContent: "center" }}
            className="border-bottom border-warning text-center border-4"
            initial={{ opacity: 0, x: 0, y: -50 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 3, duration: 2 }}
            id="aboutus">
            ABOUT US
          </motion.h1>
          <h4 className="titleDescription">
            Nestled in the heart of Miramar, Florida, since 2009,{" "}
            <strong>Miga's Steakhouse</strong> is a heaven for connoisseurs of
            top-quality steaks.
          </h4>
        </div>
        <div className="contentContainer">
          <div className="p-4">
            <p className="m-0 mb-5 border-2 border-bottom border-warning">
              For the past 14 years, Miga's Steakhouse has been synonymous with
              premium steaks—curated with meticulous care to honor the heritage
              of Argentinian grilling and innovation alike. Step into our
              culinary paradise, in Miramar and discover a diverse tapestry of
              epicurean delights. From our revered meat market featuring a
              spectrum of cuts to the artistry of hand-crafted Argentinian
              empanadas, our commitment to culinary precision shines through.
              Delight in our bakery's creations, where desserts become intricate
              works of art and bespoke cakes capture cherished moments. As
              advocates of homestyle cuisine, we cater to diverse palates,
              extending our offerings beyond steak enthusiasts, with a dense
              variety of wines.
            </p>
            <video
              className="video w-75 m-auto rounded-4"
              loop
              muted
              ref={videoRef}
              autoPlay={true}>
              <source src={Migas} />
            </video>
          </div>
        </div>
      </motion.div>
      <Frame />
    </div>
  );
};

export default About;
