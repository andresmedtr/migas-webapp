import React from "react";
import Asado from "../assets/asadodetiras.jpg";
import MixGrillx2 from "../assets/mixgrillx2.jpg";
import MixGrillx3 from "../assets/mixgrillx3.jpg";
import { Carousel } from "react-bootstrap";
import "../styles/carousel.css";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const CarouselPage = () => {
  return (
    <div className="carouselContainer">
      <p className="locationText">
        Located in the heart of Miramar, Florida
        <a
          href="https://www.google.com/maps/place/Miga's+Florida/@25.9793519,-80.3644991,17z/data=!3m1!4b1!4m6!3m5!1s0x88d9a475305c9a3d:0xc3fbeda0da46d66c!8m2!3d25.9793471!4d-80.3619242!16s%2Fg%2F12m8_5tgn?entry=ttu"
          target="_blank"
          rel="noreferrer">
          <FontAwesomeIcon
            className="locationIcon"
            icon={faLocationDot}
            target="_blank"
          />
        </a>
      </p>
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1.5 }}
        className="carouselHeading">
        Miga's Steakhouse
        <div style={{ display: "flex" }}>
          <p className="border-bottom border-2" style={{ width: "45%" }}></p>
          <span></span>
          <p style={{ width: "47%" }} className="border-bottom border-2"></p>
        </div>
      </motion.h1>
      <motion.h2
        className="pLength"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1.5 }}>
        Since 2009
      </motion.h2>
      <motion.h2
        initial={{ opacity: 0, x: 0, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1.5 }}
        className="subtitle border-bottom border-2">
        Welcome
      </motion.h2>
      <Carousel interval={500} style={{ width: "100%" }}>
        <Carousel.Item>
          <div className="sliderContainer">
            <img className="d-block w-100" src={Asado} alt="ShortRibs" />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="sliderContainer">
            <img
              className="d-block w-100"
              src={MixGrillx2}
              alt="Second slide"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="sliderContainer">
            <img className="d-block w-100" src={MixGrillx3} alt="Third slide" />
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselPage;
