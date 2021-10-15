import React from "react";
import sliderimg from "../../asset/images/banner-1.png";
import "./slider.scss";

export const Silder = () => {
  return (
    <>
      <div className="slider-section">
        <div className="slider-img">
          <img src={sliderimg} alt="banner" className="hero w-100"></img>
        </div>
      </div>
    </>
  );
};
