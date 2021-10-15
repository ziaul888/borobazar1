import React from "react";
import "./side.scss"

const SideBar = () => {
  return (
    <div className="sidebar--wrap py-3 px-0">
      <ul className="sidebar-menu">
        <li className="sidebar-menu_has-child subMenu-open">
          <a href="#">
            <img
              src="https://chaldn.com/_mpimage/popular?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D80219&q=low&v=1&m=40&webp=1&alpha=1"
              alt=""
            />{" "}
            Organic & Natural
          </a>
          <ul className="sidebar-menu__sub">
            <li>
              <a href="#">Fruits & Vegetable</a>
            </li>
            <li>
              <a href="#">Organic Grocery</a>
            </li>
            <li>
              <a href="#">Meat & Fish</a>
            </li>
            <li>
              <a href="#">Age restriced category</a>
            </li>
          </ul>
        </li>
        <li className="sidebar-menu_has-child">
          <a href="#">
            <img
              src="https://chaldn.com/_mpimage/popular?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D80219&q=low&v=1&m=40&webp=1&alpha=1"
              alt=""
            />{" "}
            Baby Care
          </a>
          <ul className="sidebar-menu__sub">
            <li>
              <a href="#">Newborn Essentials</a>
            </li>
            <li className="sidebar-menu_has-child">
              <a href="#">Diapers & Wipes</a>
              <ul className="sidebar-menu__sub">
                <li>
                  <a href="#">Wipes</a>
                </li>
                <li>
                  <a href="#">Diapers</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Feeders</a>
            </li>
            <li className="sidebar-menu_has-child">
              <a href="#">Fooding</a>
              <ul className="sidebar-menu__sub">
                <li>
                  <a href="#">Formula</a>
                </li>
                <li>
                  <a href="#">Baby & Toddler Food</a>
                </li>
                <li>
                  <a href="#">Milk, Juice & Drinks</a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">
            <img
              src="https://chaldn.com/_mpimage/popular?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D80219&q=low&v=1&m=40&webp=1&alpha=1"
              alt=""
            />{" "}
            Morning Express - Veg Store, Uttara
          </a>
        </li>
        <li>
          <a href="#">
            <img
              src="https://chaldn.com/_mpimage/popular?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D80219&q=low&v=1&m=40&webp=1&alpha=1"
              alt=""
            />{" "}
            Morning Express - Uttara
          </a>
        </li>
        <li>
          <a href="#">
            <img
              src="https://chaldn.com/_mpimage/popular?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D80219&q=low&v=1&m=40&webp=1&alpha=1"
              alt=""
            />{" "}
            Midnight Express
          </a>
        </li>
        <li>
          <a href="#">
            <img
              src="https://chaldn.com/_mpimage/popular?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D80219&q=low&v=1&m=40&webp=1&alpha=1"
              alt=""
            />{" "}
            BD Cloud Kitchen
          </a>
        </li>
        <li>
          <a href="#">
            <img
              src="https://chaldn.com/_mpimage/popular?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D80219&q=low&v=1&m=40&webp=1&alpha=1"
              alt=""
            />{" "}
            Grocery
          </a>
        </li>
        <li>
          <a href="#">
            <img
              src="https://chaldn.com/_mpimage/popular?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D80219&q=low&v=1&m=40&webp=1&alpha=1"
              alt=""
            />{" "}
            BookVerse
          </a>
          <ul className="sidebar-menu__sub">
            <li>
              <a href="#">Bangla</a>
            </li>
            <li>
              <a href="#">English</a>
            </li>
            <li>
              <a href="#">Translation</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">
            <img
              src="https://chaldn.com/_mpimage/popular?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D80219&q=low&v=1&m=40&webp=1&alpha=1"
              alt=""
            />{" "}
            Grameen Mall
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
