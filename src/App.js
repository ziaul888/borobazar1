import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import NavBar from "./layout/NavBar/NavBar.jsx";
import { Silder } from "./componet/Silder/Silder";
import { Feature } from "./componet/feature/Feature.jsx";
import SideBar from "./layout/sidebar/sideBar.jsx";
import { ProductList } from "./componet/product/productList.jsx";

function App() {
  return (
    <>
      <NavBar />
      <Silder />
      <Feature />
      <SideBar/>
      <ProductList />
    </>
  );
}

export default App;
