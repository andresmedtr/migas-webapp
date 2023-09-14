import React from "react";
import menuData from "../../menus/menuData.json";
import { Carousel } from "react-bootstrap";
import "../../styles/popularplates.css";

const PlatesCarousel = () => {
  return (
    <div>
      <div className="d-flex align-items-center justify-content-center">
        <h2 className="border-2 border-bottom border-warning">MIX GRILLS</h2>
      </div>
      <div className="d-flex align-items-center justify-content-center">
        <Carousel
          className="carouselShow"
          style={{
            width: "50%",
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
        <h2 className="border-2 border-bottom border-warning">BREAKFAST</h2>
      </div>
      <div className="d-flex align-items-center justify-content-center">
        <Carousel
          className="carouselShow"
          style={{
            width: "50%",
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
        <h2 className="border-2 border-bottom border-warning">DESSERTS</h2>
      </div>
      <div className="d-flex align-items-center justify-content-center">
        <Carousel
          className="carouselShow"
          style={{
            width: "50%",
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
