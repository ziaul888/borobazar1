import React from "react";
import playstore from "../../asset/images/play-store.png";
import AppStore from "../../asset/images/app-store.png";
import man from "../../asset/images/app-thumbnail.png";
import "./app.scss";

export const AppLink = () => {
  return (
    <>
      <div className="applink-sec  mx-auto">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6  col-md-12 applink d-none d-sm-block d-md-none d-lg-block">
              <div className="app-name">
                <h5 className="title">
                  Make your online shop easier with our mobile app
                </h5>
                <p>
                  BoroBazar makes online grocery shopping fast and easy. Get
                  groceries delivered and order the best of seasonal farm fresh
                  food.
                </p>
              </div>
              <div className="img-container">
                <img src={playstore} alt="" />
                <img src={AppStore} alt="" />
              </div>
            </div>
            <div className="col-lg-6  d-none d-sm-block d-md-none d-lg-block ">
              <div className="man-img">
                <img src={man} alt="man" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
