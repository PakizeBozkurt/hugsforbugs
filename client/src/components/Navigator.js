import React from "react";
import { Route, Routes } from "react-router";
import Hom from "./Hom";
import Home from "./Home";
function Navigator() {
  return (
    <div>
        <Routes>       /* it will route to home page */
        <Route path="/" element={<Hom />}></Route>
            <Route path="/home" element={<Home />}></Route>
        </Routes>
    </div>
  );
}
export default Navigator;