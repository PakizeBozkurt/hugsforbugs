import React from "react";
import { Route, Routes } from "react-router";
import Home from "./Home";
import Form from "./Form";

function Navigator() {
  return (
    <div>
      <Routes>       /* it will route to home page */
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Form />}></Route>
      </Routes>
    </div>
  );
}

export default Navigator;