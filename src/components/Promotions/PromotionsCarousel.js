import React, { useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import "../../styles/promotions.css";

const PromotionsCarousel = ({ slide }) => {
  const [itemIdx, setItemIdx] = useState(0);

  const handlePrev = () => {
    setItemIdx(itemIdx === 0 ? slide.promotions.length - 1 : itemIdx - 1);
  };

  const handleNext = () => {
    setItemIdx(itemIdx === slide.promotions.length - 1 ? 0 : itemIdx + 1);
  };

  return (
    <div className="slider">
      <FaArrowAltCircleLeft
        className="left-arrow"
        onClick={() => handlePrev()}
      />
      <FaArrowAltCircleRight
        className="right-arrow"
        onClick={() => handleNext()}
      />
      {slide.promotions.map((item, index) => {
        return (
          <div
            className={index === itemIdx ? "slideActive" : "slides"}
            key={index}>
            {index === itemIdx && (
              <div>
                <h2>{item.name}</h2>
                <img
                  src={require(`../../assets/${item.image}`)}
                  alt={`${index + 1} ${item.name}`}
                  className="image"
                />
                <h4
                  className="mt-5 text-center bordersBottom"
                  style={{
                    width: "95%",
                    marginRight: "0",
                  }}>
                  {item.description}
                </h4>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default PromotionsCarousel;
