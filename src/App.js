import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import NavBar from "./layout/NavBar/NavBar.jsx";

import { HomePages } from "./pages/HomePages";

function App() {
  return (
    <>
      <NavBar />

      <HomePages />
    </>
  );
}

export default App;
