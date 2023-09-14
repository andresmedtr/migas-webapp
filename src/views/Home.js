import React from "react";
import About from "../components/About";
import Carousel from "../components/Carousel";
import PopularPlates from "../components/PopularPlates";
const Home = () => {
  return (
    <div>
      <Carousel />
      <About />
      <PopularPlates />
    </div>
  );
};

export default Home;
