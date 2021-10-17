import React from "react";
import "./product.scss";

export const Products = () => {
  return (
    <>
      <div className="col-lg-2 col-md-3 product--items mb-3">
        <div className="product">
          <div className="product__card">
            <div className="product_img d-flex align-items-center justify-content-center">
              <img
                src="/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-11.png&w=256&q=100 1x"
                className="img-fluid"
                alt="Moshur Dal (Mota)"
              />
            </div>

            <div className="product_name">Moshur Dal (Mota)</div>
            <div className="product_quantity">1kg</div>
            <div className="product_price d-flex align-items-center justify-content-center">
              <span className="product_price_discount">৳ 80</span>
              <span className="product_price_price">৳ 100</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
