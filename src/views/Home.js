import React from "react";
import About from "../components/About";
import Specialties from "../components/specialties";
import Carousel from "../components/Carousel";
const Home = () => {
  return (
    <div>
      <div className="justify-center">
        <Carousel />
      </div>
      <About />
      <Specialties />
    </div>
  );
};

export default Home;
