import React from "react";
import { Route, Routes } from "react-router";
import Home from "./Home";
import CreateAvailability from "./CreateAvailability";
import Register from "./Register";
import Login from "./Login";
import AvailableTrainees from "./AvailableTrainees";
import UserProfile from "./UserProfile";
import MyAvailability from "./MyAvailability";
<<<<<<< HEAD
import AllUsers from "./AllUsers";
=======
>>>>>>> f0992b5 (Myavailability component added)
function Navigator() {
  return (
    <div>
      <Routes>       
        <Route path="/*" element={<Home />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/home" element={<AvailableTrainees />}/>
        <Route path="/createavailability" element={<CreateAvailability />}/>
        <Route path="/profile" element={<UserProfile />}/>
        <Route path="/myavailability" element={<MyAvailability />}/>
<<<<<<< HEAD
        <Route path="/allusers" element={<AllUsers />}/>
        
=======
>>>>>>> f0992b5 (Myavailability component added)
      </Routes>
    </div>
  );
}

export default Navigator;