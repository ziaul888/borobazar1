import React from "react";
import { Banner } from "../banner/Banner";
import "./product.scss";
import { Products } from "./Products";

export const ProductList = () => {
  return (
    <>
      <div className="main-content p-3 p-md-4">
        <div className="product--listing">
          <div className="row product--row">
            <Products />
            <Products />
            <Products />
            <Products />
            <Products />
            <Products />
            <Products />
            <Products />
            <Products />
            <Products />
            <Products />
            <Products />
            <Banner />
            <Products />
            <Products />
            <Products />
            <Products />
            <Products />
            <Products />
            <Products />
            <Products />
            <Products />
            <Products />
            <Products />
            <Products />
          </div>
        </div>
      </div>
    </>
  );
};
