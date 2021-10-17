import React from "react";
import sliderimg from "../../asset/images/banner-1.png";
import "./slider.scss";
import "antd/dist/antd.css";
import { Carousel } from "antd";

export const Silder = () => {
  const slider = [
    { id: "slider2", img: sliderimg },
    { id: "slider3", img: sliderimg },
    { id: "slider4", img: sliderimg },
    { id: "slider5", img: sliderimg },
  ];
  return (
    <>
      <div className="slider-section">
        <Carousel autoplay>
          {slider.map((item) => {
            return (
              <div>
                <img src={item.img} alt="imfff" />
              </div>
            );
          })}
        </Carousel>
        ,
      </div>
    </>
  );
};
