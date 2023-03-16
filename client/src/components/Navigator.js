import React from "react";
import { Route, Routes } from "react-router";
import Home from "./Home";
import Register from "./Register";
import Login from "./Login";
import UserProfile from "./UserProfile";
import MyAvailability from "./MyAvailability";
import AllUsers from "./AllUsers";
import AvailableTrainees from './AvailableTrainees';


function Navigator() {
  return (
    <div>
      <Routes>       
        <Route path="/*" element={<Home />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/my-matches" element={<AvailableTrainees />}/>
        <Route path="/profile" element={<UserProfile />}/>
        <Route path="/my-availability" element={<MyAvailability />}/>
        <Route path="/all-users" element={<AllUsers />}/>
      </Routes>
    </div>
  );
}

export default Navigator;