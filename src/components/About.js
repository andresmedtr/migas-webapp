import React from "react";
import { useEffect, useRef } from "react";
import Migas from "../assets/migasFront.mp4";
import "../styles/about.css";
import { motion, useScroll, useTransform } from "framer-motion";

const About = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 2], [0.3, 1]);
  const videoRef = useRef();
  useEffect(() => {
    videoRef.current.play();
  }, []);

  return (
    <div style={{ height: "170vh" }}>
      <motion.div
        className="scrollContainer"
        style={{
          height: "100vh",
          fontSize: "1.5rem",
          fontWeight: "bold",
          opacity: scrollYProgress,
          transform: `scale(${scale})`,
        }}>
        <div className="title">
          <motion.h1
            initial={{ opacity: 0, x: 0, y: -50 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 2 }}>
            About us
          </motion.h1>
          <h5 className="titleDescription">
            Nestled in the heart of Miramar, Florida, since 2008, Miga's
            Steakhouse is a heaven for connoisseurs of top-quality steaks.
          </h5>
        </div>
        <div className="contentContainer">
          <div className="aboutP">
            <p style={{ width: "100%" }}>
              For over a decade, Miga's Steakhouse has been synonymous with
              premium steaks—curated with meticulous care to honor the heritage
              of Argentinian grilling and innovation alike. Step into our
              culinary realm and discover a diverse tapestry of epicurean
              delights. From our revered meat market featuring a spectrum of
              cuts to the artistry of hand-crafted Argentinian empanadas, our
              commitment to culinary precision shines through. Delight in our
              bakery's creations, where desserts become intricate works of art
              and bespoke cakes capture cherished moments. As advocates of
              homestyle cuisine, we cater to diverse palates, extending our
              offerings beyond steak enthusiasts
            </p>
          </div>
          <div>
            <video
              className="rounded-4"
              loop
              muted
              ref={videoRef}
              autoPlay={true}>
              <source src={Migas} />
            </video>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
