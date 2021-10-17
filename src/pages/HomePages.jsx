import React from "react";
import { Silder } from "../componet/Silder/Silder";
import { Feature } from "../componet/feature/Feature.jsx";
import SideBar from "../layout/sidebar/sideBar";
import { ProductList } from "../componet/product/productList";
import { AppLink } from "../componet/app/AppLink";
import "./main.scss";

export const HomePages = () => {
  return (
    <>
      <Silder />
      <Feature />

      <div className="main--wrapper">
        <div className="container-fluid">
          <div className="row">
            <SideBar />
            <ProductList />
            <AppLink />
          </div>
        </div>
      </div>
    </>
  );
};
