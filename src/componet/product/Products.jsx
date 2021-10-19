import React from "react";
import "./product.scss";
import product from "../../asset/images/p-4-1.png";

export const Products = () => {
  return (
    <>
      <div className="col-6 col-md-3  product--items mb-3">
        <div className="product">
          <div className="product__card">
            <div className="product_img d-flex align-items-center justify-content-center">
              <img
                src={product}
                className="img-fluid"
                alt="Moshur Dal (Mota)"
              />
            </div>
            <button>
              <span className="addtocart">+</span>
            </button>
            <div className="product_name">Green Giant Peas</div>
            <div className="product_quantity">1kg</div>
            <div className="product_price d-flex align-items-center justify-content-center">
              <span className="product_price_discount">৳ 80</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
