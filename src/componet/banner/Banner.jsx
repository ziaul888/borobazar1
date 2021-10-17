import React from "react";
import bann from "../../asset/images/banner-6.png";
import "./banner.scss";

export const Banner = () => {
  return (
    <div className="4">
      
        <div className="banner">
          <img src={bann} alt="banner" className="hero w-100"></img>
        </div>
     
    </div>
  );
};
