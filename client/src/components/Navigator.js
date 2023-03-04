import React from "react";
import { Route, Routes } from "react-router";
import Home from "./Home";
import CreateAvailability from "./CreateAvailability";
import Register from "./Register";
import Login from "./Login";
import AvailableTrainees from "./AvailableTrainees";
import UserProfile from "./UserProfile";
function Navigator() {
  return (
    <div>
      <Routes>       
        <Route path="/" element={<Home />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/home" element={<AvailableTrainees />}/>
        <Route path="/createavailability" element={<CreateAvailability />}/>
        <Route path="/profile" element={<UserProfile />}/>
      </Routes>
    </div>
  );
}

export default Navigator;