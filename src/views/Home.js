import React from "react";
import About from "../components/About";
import Carousel from "../components/Carousel";
import PopularPlates from "../components/PopularPlates";
const Home = () => {
  return (
    <div>
      <div className="justify-center">
        <Carousel />
      </div>
      <About />
      <PopularPlates />
    </div>
  );
};

export default Home;
