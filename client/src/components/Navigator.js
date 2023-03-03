import React from "react";
import { Route, Routes } from "react-router";
import Home from "./Home";

import Register from "./Register";
import Login from "./Login";
import CreateAvailability from "./CreateAvailability";
import AvailableTrainees from "./AvailableTrainees";

function Navigator() {
  return (
    <div>
      <Routes>
        {" "}
        //it will route to home page
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createavailability" element={<CreateAvailability />} />
        <Route path="/home" element={<AvailableTrainees />} />
      </Routes>
    </div>
  );
}

export default Navigator;