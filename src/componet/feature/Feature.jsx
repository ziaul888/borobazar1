import React from "react";
import { data } from "./data";
import "./feature.scss";

export const Feature = () => {
  return (
    <div className="feature-sec  ">
      <div className="row">
        {data.map((item) => {
          return (
            <div className="col-lg-3 col-md-6 d-none d-sm-block d-md-none d-lg-block">
              <div className="feature d-flex justify-content ">
                <div className="feature-img">
                  <img src={item.img} alt />
                </div>
                <div className="title">
                  <h5>{item.title}</h5>
                  <p>{item.decs}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="col-lg-3 col-md-6 d-block d-sm-none">
        <div className="feature d-flex justify-content ">
          <div className="feature-img">
            <img
              src="https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbundle%2F2.png&w=256&q=75"
              alt="img"
            />
          </div>
          <div className="title">
            <h5>Spring cleaning for home appliance</h5>
            <p>Get your clean on supplies.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
