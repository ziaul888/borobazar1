import React, { useState } from "react";
import "./side.scss";
import veg from "../../asset/images/fresh-vegetables.svg";
import diet from "../../asset/images/diet-foods.svg";
const SideBar = ({ handleSideBar }) => {
  const [open, setOpen] = useState(false);

  const sideBarOpen = () => {
    setOpen(true);
  };

  return (
    <div className="sidebar--wrap py-3 px-0  " show={handleSideBar}>
      <ul className="sidebar-menu">
        <li
          className="sidebar-menu_has-child subMenu-open "
          onClick={sideBarOpen}
        >
          <a>
            <img src={veg} alt="" /> Fresh Vegetables
          </a>

          <ul
            className={`${open ? "sidebar-menu__sub " : "sidebar-menu hide"}`}
          >
            <li>
              <a>Arugula</a>
            </li>
            <li>
              <a href="#">Asparagus</a>
            </li>
            <li>
              <a href="#">Beets</a>
            </li>
            <li>
              <a href="#">Cabbages</a>
            </li>
          </ul>
        </li>
        <li className="sidebar-menu_has-child">
          <a>
            <img src={diet} alt="" /> Diet Foods
          </a>
          <ul
            className={`${open ? "sidebar-menu__sub " : "sidebar-menu hide"}`}
          >
            <li>
              <a href="#">Whole Eggs</a>
            </li>

            <li>
              <a href="#">Boiled Potatoes</a>
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
