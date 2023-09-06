import React from "react";
import menuData from "../../menus/menuData.json";
import { Carousel } from "react-bootstrap";

const PlatesCarousel = () => {
  return (
    <div>
      <div className="d-flex align-items-center justify-content-center">
        <h4>MIX GRILLS</h4>
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
            <Carousel.Item style={{}}>
              <img
                className="w-100"
                src={require(`../../assets/${item.image}`)}
                alt={`${index} Slide`}
              />
              <Carousel.Caption>
                <h2>{item.name}</h2>
                <p>{item.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <div className="d-flex align-items-center justify-content-center">
        <h4>BREAKFAST</h4>
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
            <Carousel.Item style={{}}>
              <img
                className="w-100"
                src={require(`../../assets/${item.image}`)}
                alt={`${index} Slide`}
              />
              <Carousel.Caption>
                <h2>{item.name}</h2>
                <p>{item.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <div className="d-flex align-items-center justify-content-center">
        <h4>DESSERTS</h4>
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
            <Carousel.Item style={{}}>
              <img
                className="w-100"
                src={require(`../../assets/${item.image}`)}
                alt={`${index} Slide`}
              />
              <Carousel.Caption>
                <h2>{item.name}</h2>
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
