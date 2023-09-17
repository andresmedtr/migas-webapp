import React from "react";
import menuData from "../../menus/menuData.json";
import { Carousel } from "react-bootstrap";
import "../../styles/popularplates.css";

const PlatesCarousel = () => {
  return (
    <div>
      <div className="d-flex align-items-center justify-content-center">
        <h2 className="borderBottom">MIX GRILLS</h2>
      </div>
      <div
        className="d-flex align-items-center justify-content-center"
        data-aos="fade-up">
        <Carousel
          className="carouselShow"
          style={{
            width: "35%",
          }}>
          {menuData.mixGrills.map((item, index) => (
            <Carousel.Item key={index}>
              <img
                className="w-100"
                src={require(`../../assets/${item.image}`)}
                alt={`${index + 1} Slide`}
              />
              <div className="image-overlay"></div>
              <Carousel.Caption className="itemDescription">
                <h5>{item.name}</h5>
                <p>{item.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      <div className="d-flex align-items-center justify-content-center mt-5 ps-5 pe-5">
        <h2 className="borderBottom">BREAKFAST</h2>
      </div>
      <div
        className="d-flex align-items-center justify-content-center"
        data-aos="fade-down">
        <Carousel
          className="carouselShow"
          style={{
            width: "35%",
          }}>
          {menuData.breakfast.map((item, index) => (
            <Carousel.Item key={index}>
              <img
                className="w-100"
                src={require(`../../assets/${item.image}`)}
                alt={`${index + 1} Slide`}
              />
              <div className="image-overlay"></div>
              <Carousel.Caption className="itemDescription">
                <h5>{item.name}</h5>
                <p>{item.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <div className="d-flex align-items-center justify-content-center mt-5 ps-5 pe-5">
        <h2 className="borderBottom">DESSERTS</h2>
      </div>
      <div
        className="d-flex align-items-center justify-content-center mb-5"
        data-aos="fade-up">
        <Carousel
          className="carouselShow"
          style={{
            width: "35%",
          }}>
          {menuData.bakery.map((item, index) => (
            <Carousel.Item key={index}>
              <img
                className="w-100"
                src={require(`../../assets/${item.image}`)}
                alt={`${index} Slide`}
              />
              <div className="image-overlay"></div>

              <Carousel.Caption className="itemDescription">
                <h5>{item.name}</h5>
                <p>{item.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default PlatesCarousel;
