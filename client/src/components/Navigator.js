import React from "react";
import { Route, Routes } from "react-router";
import Home from "./Home";

import Register from "./Register";
import Login from "./Login";
import AvailibityCards from "./AvailibityTable";
import Availibites from "./Availibites";
function Navigator() {
  return (
    <div>
      <Routes>       //it will route to home page 
        <Route path="/" element={<Home />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/home" element={<Availibites/>}/>
      
      </Routes>
    </div>
  );
}

export default Navigator;