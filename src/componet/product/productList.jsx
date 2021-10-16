import React from "react";
import "./product.scss";

export const ProductList = () => {
  return (
    <>
      <div className="main-content p-3 p-md-4">
        <div className="product--listing">
          <div className="row product--row">
            <div className="col-lg-2 col-md-3 product--items">
              <div className="product">
                <div className="product__card">
                  <div className="product_img d-flex align-items-center justify-content-center">
                    <img
                      src="https://khetkhamar.org/public/uploads/all/VjC0sgH3JX1NufaSV4Ssyc3PZPBHHgkSdfE8LRlM.jpg"
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

            <div className="col-lg-2 col-md-3 product--items ">
              <div className="product">
                <div className="product__card">
                  <div className="product_img d-flex align-items-center justify-content-center">
                    <img
                      src="https://khetkhamar.org/public/uploads/all/AeaQPVANzNxNqMkR86wCOfejtzQS0z3nn50kNfTK.png"
                      className="img-fluid"
                      alt="Moshur Dal (Deshi)"
                    />
                  </div>

                  <div className="product_name">Moshur Dal (Deshi)</div>
                  <div className="product_quantity">1kg</div>
                  <div className="product_price d-flex align-items-center justify-content-center">
                    <span className="product_price_discount">৳ 115</span>
                    <span className="product_price_price">৳ 125</span>
                  </div>

                  <div className="product_overlay d-flex align-items-center justify-content-center">
                    <p className="product_overlay_text">Add to Shopping Bag</p>

                    <a href="#" className="product_overlay_details">
                      Details &raquo;
                    </a>
                  </div>
                </div>

                <div className="product__btns">
                  <div className="product__btns_cart px-3">
                    <button className="btn w-100">
                      <span className="product__btns_cart_text">
                        <i className="fas fa-shopping-basket mr-1"></i>
                        Add to Bag
                      </span>
                    </button>
                  </div>

                  <div className="product__btns_add px-3">
                    <div className="d-flex align-items-center">
                      <button className="btn-minus">–</button>
                      <div className="product__btns_add_number">1</div>
                      <button className="btn-plus">+</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-3 product--items ">
              <div className="product">
                <div className="product__card">
                  <div className="product_img d-flex align-items-center justify-content-center">
                    <img
                      src="https://khetkhamar.org/public/uploads/all/om605p27wwMpe5M0bex2eoPQlRweztGTCpCW0Txh.jpg"
                      className="img-fluid"
                      alt="Radhuni Coriander (Dhoniya) Powder"
                    />
                  </div>

                  <div className="product_name">
                    Radhuni Coriander (Dhoniya) Powder
                  </div>
                  <div className="product_quantity">100 gm pcs</div>
                  <div className="product_price d-flex align-items-center justify-content-center">
                    <span className="product_price_discount">৳ 33</span>
                    <span className="product_price_price">৳ 40</span>
                  </div>

                  <div className="product_overlay d-flex align-items-center justify-content-center">
                    <p className="product_overlay_text">Add to Shopping Bag</p>

                    <a href="#" className="product_overlay_details">
                      Details &raquo;
                    </a>
                  </div>
                </div>

                <div className="product__btns">
                  <div className="product__btns_cart px-3">
                    <button className="btn w-100">
                      <span className="product__btns_cart_text">
                        <i className="fas fa-shopping-basket mr-1"></i>
                        Add to Bag
                      </span>
                    </button>
                  </div>

                  <div className="product__btns_add px-3">
                    <div className="d-flex align-items-center">
                      <button className="btn-minus">–</button>
                      <div className="product__btns_add_number">1</div>
                      <button className="btn-plus">+</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-3 product--items ">
              <div className="product">
                <div className="product__card">
                  <div className="product_img d-flex align-items-center justify-content-center">
                    <img
                      src="https://khetkhamar.org/public/uploads/all/p6r7KrtHn7mMnkoiqVy1eExCmPZvHLjjziN2dWz0.jpg"
                      className="img-fluid"
                      alt="Nestle Maggi 2-Minute Masala Instant Noodles 4 pack"
                    />
                  </div>

                  <div className="product_name">
                    Nestle Maggi 2-Minute Masala Instant Noodles
                  </div>
                  <div className="product_quantity">4 pack</div>
                  <div className="product_price d-flex align-items-center justify-content-center">
                    <span className="product_price_discount">৳ 66</span>
                    <span className="product_price_price">৳ 80</span>
                  </div>

                  <div className="product_overlay d-flex align-items-center justify-content-center">
                    <p className="product_overlay_text">Add to Shopping Bag</p>

                    <a href="#" className="product_overlay_details">
                      Details &raquo;
                    </a>
                  </div>
                </div>

                <div className="product__btns">
                  <div className="product__btns_cart px-3">
                    <button className="btn w-100">
                      <span className="product__btns_cart_text">
                        <i className="fas fa-shopping-basket mr-1"></i>
                        Add to Bag
                      </span>
                    </button>
                  </div>

                  <div className="product__btns_add px-3">
                    <div className="d-flex align-items-center">
                      <button className="btn-minus">–</button>
                      <div className="product__btns_add_number">1</div>
                      <button className="btn-plus">+</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-3 product--items ">
              <div className="product">
                <div className="product__card">
                  <div className="product_badge">20%</div>
                  <div className="product_img d-flex align-items-center justify-content-center">
                    <img
                      src="https://khetkhamar.org/public/uploads/all/sWIf7FXYm8aaYsrPEziSaQCiL96gdOURDozbKkrR.jpg"
                      className="img-fluid"
                      alt="Diploma Instant Full Cream Milk Powder"
                    />
                  </div>

                  <div className="product_name">
                    Diploma Instant Full Cream Milk Powder
                  </div>
                  <div className="product_quantity">200 gm</div>
                  <div className="product_price d-flex align-items-center justify-content-center">
                    <span className="product_price_discount">৳ 150</span>
                    <span className="product_price_price">৳ 180</span>
                  </div>

                  <div className="product_overlay d-flex align-items-center justify-content-center">
                    <p className="product_overlay_text">Add to Shopping Bag</p>

                    <a href="#" className="product_overlay_details">
                      Details &raquo;
                    </a>
                  </div>
                </div>

                <div className="product__btns">
                  <div className="product__btns_cart px-3">
                    <button className="btn w-100">
                      <span className="product__btns_cart_text">
                        <i className="fas fa-shopping-basket mr-1"></i>
                        Add to Bag
                      </span>
                    </button>
                  </div>

                  <div className="product__btns_add px-3">
                    <div className="d-flex align-items-center">
                      <button className="btn-minus">–</button>
                      <div className="product__btns_add_number">1</div>
                      <button className="btn-plus">+</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-3 product--items ">
              <div className="product">
                <div className="product__card">
                  <div className="product_badge">20%</div>
                  <div className="product_img d-flex align-items-center justify-content-center">
                    <img
                      src="https://khetkhamar.org/public/uploads/all/Ko3Yxxvjms9nLmASkNX0f7z1lw1LZbjKkbp0crO9.jpg"
                      className="img-fluid"
                      alt="Vim 300gm"
                    />
                  </div>

                  <div className="product_name">Vim 300gm</div>
                  <div className="product_quantity">1 pcs</div>
                  <div className="product_price d-flex align-items-center justify-content-center">
                    <span className="product_price_discount">৳ 35</span>
                    <span className="product_price_price">৳ 40</span>
                  </div>

                  <div className="product_overlay d-flex align-items-center justify-content-center">
                    <p className="product_overlay_text">Add to Shopping Bag</p>

                    <a href="#" className="product_overlay_details">
                      Details &raquo;
                    </a>
                  </div>
                </div>

                <div className="product__btns">
                  <div className="product__btns_cart px-3">
                    <button className="btn w-100">
                      <span className="product__btns_cart_text">
                        <i className="fas fa-shopping-basket mr-1"></i>
                        Add to Bag
                      </span>
                    </button>
                  </div>

                  <div className="product__btns_add px-3">
                    <div className="d-flex align-items-center">
                      <button className="btn-minus">–</button>
                      <div className="product__btns_add_number">1</div>
                      <button className="btn-plus">+</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-3 product--items ">
              <div className="product">
                <div className="product__card">
                  <div className="product_badge">20%</div>
                  <div className="product_img d-flex align-items-center justify-content-center">
                    <img
                      src="https://khetkhamar.org/public/uploads/all/Ddqzgvvu7lVpLhbIkqhkk2HlFqY2vT6XUUd84lva.jpg"
                      className="img-fluid"
                      alt="Mr. Noodles Magic Masala"
                    />
                  </div>

                  <div className="product_name">Mr. Noodles Magic Masala</div>
                  <div className="product_quantity">28 Pcs 1120 gm</div>
                  <div className="product_price d-flex align-items-center justify-content-center">
                    <span className="product_price_discount">৳ 35</span>
                    <span className="product_price_price">৳ 40</span>
                  </div>

                  <div className="product_overlay d-flex align-items-center justify-content-center">
                    <p className="product_overlay_text">Add to Shopping Bag</p>

                    <a href="#" className="product_overlay_details">
                      Details &raquo;
                    </a>
                  </div>
                </div>

                <div className="product__btns">
                  <div className="product__btns_cart px-3">
                    <button className="btn w-100">
                      <span className="product__btns_cart_text">
                        <i className="fas fa-shopping-basket mr-1"></i>
                        Add to Bag
                      </span>
                    </button>
                  </div>

                  <div className="product__btns_add px-3">
                    <div className="d-flex align-items-center">
                      <button className="btn-minus">–</button>
                      <div className="product__btns_add_number">1</div>
                      <button className="btn-plus">+</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-3 product--items ">
              <div className="product">
                <div className="product__card">
                  <div className="product_badge">20%</div>
                  <div className="product_img d-flex align-items-center justify-content-center">
                    <img
                      src="assets/images/placeholder-image.png"
                      className="img-fluid"
                      alt="Vim Dishwashing Liquid"
                    />
                  </div>

                  <div className="product_name">Vim Dishwashing Liquid</div>
                  <div className="product_quantity">500 ml</div>
                  <div className="product_price d-flex align-items-center justify-content-center">
                    <span className="product_price_discount">৳ 35</span>
                    <span className="product_price_price">৳ 40</span>
                  </div>

                  <div className="product_overlay d-flex align-items-center justify-content-center">
                    <p className="product_overlay_text">Add to Shopping Bag</p>

                    <a href="#" className="product_overlay_details">
                      Details &raquo;
                    </a>
                  </div>
                </div>

                <div className="product__btns">
                  <div className="product__btns_cart px-3">
                    <button className="btn w-100">
                      <span className="product__btns_cart_text">
                        <i className="fas fa-shopping-basket mr-1"></i>
                        Add to Bag
                      </span>
                    </button>
                  </div>

                  <div className="product__btns_add px-3">
                    <div className="d-flex align-items-center">
                      <button className="btn-minus">–</button>
                      <div className="product__btns_add_number">1</div>
                      <button className="btn-plus">+</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-3 product--items ">
              <div className="product">
                <div className="product__card">
                  <div className="product_img d-flex align-items-center justify-content-center">
                    <img
                      src="https://khetkhamar.org/public/uploads/all/VjC0sgH3JX1NufaSV4Ssyc3PZPBHHgkSdfE8LRlM.jpg"
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

                  <div className="product_overlay d-flex align-items-center justify-content-center">
                    <p className="product_overlay_text">Add to Shopping Bag</p>

                    <a href="#" className="product_overlay_details">
                      Details &raquo;
                    </a>
                  </div>
                </div>

                <div className="product__btns">
                  <div className="product__btns_cart px-3">
                    <button className="btn w-100">
                      <span className="product__btns_cart_text">
                        <i className="fas fa-shopping-basket mr-1"></i>
                        Add to Bag
                      </span>
                    </button>
                  </div>

                  <div className="product__btns_add px-3">
                    <div className="d-flex align-items-center">
                      <button className="btn-minus">–</button>
                      <div className="product__btns_add_number">1</div>
                      <button className="btn-plus">+</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-3 product--items ">
              <div className="product">
                <div className="product__card">
                  <div className="product_img d-flex align-items-center justify-content-center">
                    <img
                      src="https://khetkhamar.org/public/uploads/all/AeaQPVANzNxNqMkR86wCOfejtzQS0z3nn50kNfTK.png"
                      className="img-fluid"
                      alt="Moshur Dal (Deshi)"
                    />
                  </div>

                  <div className="product_name">Moshur Dal (Deshi)</div>
                  <div className="product_quantity">1kg</div>
                  <div className="product_price d-flex align-items-center justify-content-center">
                    <span className="product_price_discount">৳ 115</span>
                    <span className="product_price_price">৳ 125</span>
                  </div>

                  <div className="product_overlay d-flex align-items-center justify-content-center">
                    <p className="product_overlay_text">Add to Shopping Bag</p>

                    <a href="#" className="product_overlay_details">
                      Details &raquo;
                    </a>
                  </div>
                </div>

                <div className="product__btns">
                  <div className="product__btns_cart px-3">
                    <button className="btn w-100">
                      <span className="product__btns_cart_text">
                        <i className="fas fa-shopping-basket mr-1"></i>
                        Add to Bag
                      </span>
                    </button>
                  </div>

                  <div className="product__btns_add px-3">
                    <div className="d-flex align-items-center">
                      <button className="btn-minus">–</button>
                      <div className="product__btns_add_number">1</div>
                      <button className="btn-plus">+</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-3 product--items ">
              <div className="product">
                <div className="product__card">
                  <div className="product_img d-flex align-items-center justify-content-center">
                    <img
                      src="https://khetkhamar.org/public/uploads/all/om605p27wwMpe5M0bex2eoPQlRweztGTCpCW0Txh.jpg"
                      className="img-fluid"
                      alt="Radhuni Coriander (Dhoniya) Powder"
                    />
                  </div>

                  <div className="product_name">
                    Radhuni Coriander (Dhoniya) Powder
                  </div>
                  <div className="product_quantity">100 gm pcs</div>
                  <div className="product_price d-flex align-items-center justify-content-center">
                    <span className="product_price_discount">৳ 33</span>
                    <span className="product_price_price">৳ 40</span>
                  </div>

                  <div className="product_overlay d-flex align-items-center justify-content-center">
                    <p className="product_overlay_text">Add to Shopping Bag</p>

                    <a href="#" className="product_overlay_details">
                      Details &raquo;
                    </a>
                  </div>
                </div>

                <div className="product__btns">
                  <div className="product__btns_cart px-3">
                    <button className="btn w-100">
                      <span className="product__btns_cart_text">
                        <i className="fas fa-shopping-basket mr-1"></i>
                        Add to Bag
                      </span>
                    </button>
                  </div>

                  <div className="product__btns_add px-3">
                    <div className="d-flex align-items-center">
                      <button className="btn-minus">–</button>
                      <div className="product__btns_add_number">1</div>
                      <button className="btn-plus">+</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-3 product--items ">
              <div className="product">
                <div className="product__card">
                  <div className="product_img d-flex align-items-center justify-content-center">
                    <img
                      src="https://khetkhamar.org/public/uploads/all/p6r7KrtHn7mMnkoiqVy1eExCmPZvHLjjziN2dWz0.jpg"
                      className="img-fluid"
                      alt="Nestle Maggi 2-Minute Masala Instant Noodles 4 pack"
                    />
                  </div>

                  <div className="product_name">
                    Nestle Maggi 2-Minute Masala Instant Noodles
                  </div>
                  <div className="product_quantity">4 pack</div>
                  <div className="product_price d-flex align-items-center justify-content-center">
                    <span className="product_price_discount">৳ 66</span>
                    <span className="product_price_price">৳ 80</span>
                  </div>

                  <div className="product_overlay d-flex align-items-center justify-content-center">
                    <p className="product_overlay_text">Add to Shopping Bag</p>

                    <a href="#" className="product_overlay_details">
                      Details &raquo;
                    </a>
                  </div>
                </div>

                <div className="product__btns">
                  <div className="product__btns_cart px-3">
                    <button className="btn w-100">
                      <span className="product__btns_cart_text">
                        <i className="fas fa-shopping-basket mr-1"></i>
                        Add to Bag
                      </span>
                    </button>
                  </div>

                  <div className="product__btns_add px-3">
                    <div className="d-flex align-items-center">
                      <button className="btn-minus">–</button>
                      <div className="product__btns_add_number">1</div>
                      <button className="btn-plus">+</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
