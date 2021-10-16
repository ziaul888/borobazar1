import React from "react";
import { data } from "./data";
import "./feature.scss";

export const Feature = () => {
  return (
    <div className="feature-sec mt-5 d-none d-sm-block d-md-none d-lg-block">
      <div className="row">
        {data.map((item) => {
          return (
            <div className="col-lg-3 col-md-6">
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
    </div>
  );
};
