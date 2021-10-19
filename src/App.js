import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import NavBar from "./layout/NavBar/NavBar.jsx";
import { HomePages } from "./pages/HomePages";
import SideBar from "./layout/sidebar/sideBar";
import { Silder } from "./componet/Silder/Silder";
import { Feature } from "./componet/feature/Feature.jsx";
import { ProductList } from "./componet/product/productList";
import { AppLink } from "./componet/app/AppLink";
function App() {
  return (
    <>
      <NavBar />
      <Silder />
      <Feature />
      <div className="main--wrapper">
        <div className="container-fluid">
          <div className="row">
            <SideBar />
            <div className="main-content p-3 p-md-4">
              <ProductList />
            </div>
            <AppLink />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
