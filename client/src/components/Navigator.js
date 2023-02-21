import React from "react";
import { Route, Routes } from "react-router";
import Heading from "./Heading";
import Home from "./Home";
function Navigator() {
  return (
    <div>
        <Routes>       /* it will route to home page */
        <Route path="/" element={<Heading />}></Route>
            <Route path="/home" element={<Home />}></Route>
        </Routes>
    </div>
  );
}
export default Navigator;