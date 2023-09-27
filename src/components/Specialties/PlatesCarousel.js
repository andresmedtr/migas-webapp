import React from "react";
import menuData from "../../menus/menuData.json";
import { Carousel } from "react-bootstrap";
import "../../styles/popularplates.css";
import { Link } from "react-router-dom";

const PlatesCarousel = () => {
  return (
    <div className="row container-fluid">
      <div className="col-4 mt-5 mb-5">
        <div className="">
          <h2 className="text-center w-50 bordersBottom mx-auto">BREAKFAST</h2>
        </div>
        <div
          className="d-flex justify-content-center align-items-center h-100"
          data-aos="fade-up">
          <Carousel
            className="carouselShow"
            style={{
              width: "80%",
            }}>
            {menuData.breakfast.map((item, index) => (
              <Carousel.Item key={index}>
                <img
                  className="fixedImage"
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
      </div>
      <div className="col-4 mt-5 mb-5">
        <div className="text-center">
          <h2 className="w-50  bordersBottom mx-auto">LUNCH</h2>
        </div>
        <div
          className="d-flex justify-content-center align-items-center h-100"
          data-aos="fade-down">
          <Carousel
            className="carouselShow"
            style={{
              width: "80%",
            }}>
            {menuData.mixGrills.map((item, index) => (
              <Carousel.Item key={index}>
                <img
                  className="fixedImage"
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
      </div>
      <div className="col-4 mt-5 mb-5">
        <div className="text-center">
          <h2 className="w-50 mx-auto bordersBottom">DINNER</h2>
        </div>
        <div
          className="d-flex justify-content-center align-items-center h-100"
          data-aos="fade-up">
          <Carousel
            className="carouselShow"
            style={{
              width: "80%",
              height: "auto",
            }}>
            {menuData.mixGrills.map((item, index) => (
              <Carousel.Item key={index}>
                <img
                  className="fixedImage"
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
      <div className="w-75 mx-auto mb-5" data-aos="fade-down">
        <div className="col-12">
          <h2 className="text-center bordersBottom mx-auto w-50">DESSERTS</h2>
        </div>
        <div
          className="d-flex justify-content-center align-items-center h-100"
          data-aos="fade-up">
          <Carousel
            className="carouselShow"
            style={{
              width: "80%",
              height: "auto",
            }}>
            {menuData.bakery.map((item, index) => (
              <Carousel.Item key={index}>
                <img
                  className="fixedImage"
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
      <div className="w-75 mx-auto p-5" data-aos="fade-down">
        <div className="col-12">
          <h2 className="text-center bordersBottom mx-auto w-50">BUTCHERY</h2>
        </div>
        <div
          className="d-flex justify-content-center align-items-center h-100"
          data-aos="fade-down">
          <Carousel
            className="carouselShow"
            style={{
              width: "80%",
              height: "auto",
            }}>
            {menuData.bakery.map((item, index) => (
              <Carousel.Item key={index}>
                <img
                  className="fixedImage"
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

      <div className="d-flex justify-content-center pt-5">
        <Link to="/menu">
          <p className="fs-2 btn btn-warning text-light mb-0 mt-5">
            VIEW OUR FULL MENU
          </p>
        </Link>
      </div>
    </div>
  );
};

export default PlatesCarousel;
