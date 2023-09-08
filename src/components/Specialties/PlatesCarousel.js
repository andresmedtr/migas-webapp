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
      <div
        className="d-flex align-items-center justify-content-center"
        style={{
          textAlign: "center",
          paddingLeft: "5rem",
          paddingRight: "5rem",
        }}>
        <Carousel
          className=""
          style={{
            width: "50%",
          }}>
          {menuData.mixGrills.map((item, index) => (
            <Carousel.Item key={index}>
              <img
                className="w-100 carouselImage"
                src={require(`../../assets/${item.image}`)}
                alt={`${index} Slide`}
              />
              <div className="image-overlay"></div>
              <Carousel.Caption>
                <h5>{item.name}</h5>
                <p style={{ fontSize: "1rem" }}>{item.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <div className="d-flex align-items-center justify-content-center mt-5">
        <h2 className="border-2 border-bottom border-warning">BREAKFAST</h2>
      </div>
      <div
        className="d-flex align-items-center justify-content-center"
        style={{
          textAlign: "center",
          paddingLeft: "5rem",
          paddingRight: "5rem",
        }}>
        <Carousel
          className=""
          style={{
            width: "50%",
          }}>
          {menuData.breakfast.map((item, index) => (
            <Carousel.Item key={index}>
              <img
                className="w-100"
                src={require(`../../assets/${item.image}`)}
                alt={`${index} Slide`}
              />
              <div className="image-overlay"></div>

              <Carousel.Caption>
                <h5>{item.name}</h5>
                <p style={{ fontSize: "1rem" }}>{item.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <div className="d-flex align-items-center justify-content-center mt-5">
        <h2 className="border-2 border-bottom border-warning">DESSERTS</h2>
      </div>
      <div
        className="d-flex align-items-center justify-content-center"
        style={{
          textAlign: "center",
          paddingLeft: "5rem",
          paddingRight: "5rem",
        }}>
        <Carousel
          className=""
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

              <Carousel.Caption>
                <h5>{item.name}</h5>
                <p style={{ fontSize: "1rem" }}>{item.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default PlatesCarousel;
