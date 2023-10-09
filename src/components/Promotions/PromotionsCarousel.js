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
              <div className="w-100 mb-5">
                <h2 className="mt-5">{item.name}</h2>
                {/* DISPLAYING IMAGE OR VIDEO ON DAILY SPECIALS SECTION */}
                {!item.image ? (
                  <div className="w-50 mx-auto bg bg-dark rounded-4">
                    <video
                      className="w-100 video mx-auto rounded-4"
                      loop
                      muted
                      playbackRate={1.5}
                      autoPlay={true}
                      style={{ opacity: "0.6" }}>
                      <source src={require(`../../assets/${item.video}`)} />
                    </video>
                  </div>
                ) : (
                  <div
                    className="rounded-4 bg bg-dark w-75
                   mx-auto">
                    <img
                      src={require(`../../assets/${item.image}`)}
                      style={{ opacity: "0.6", height: "auto" }}
                      alt={`${index + 1} ${item.name}`}
                      className="image w-100 rounded-4"
                    />
                  </div>
                )}

                <h4 className="mt-2 w-50 bordersBottom mx-auto mb-5">
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
