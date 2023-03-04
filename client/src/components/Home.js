import React from "react";
// import logo from "/Users/nagehan/Documents/hugsforbugs/client/src/components/logo.png";
import vid from "./pexels-c-technical-6334253.mp4";
import "./home.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";


function Home() {
  return (
    <div>
      <div className="showcase">
        <div className="text">
          <h1 className="header">Study Buddies</h1>
          <h4>Boost Your Productivity</h4>
          <p>
            Check availability and connect with friends and other CYF trainees. Study together or join study groups. Make collaboration easier and more productive</p>
        </div>
        <div className="btn-wrapper">
        
          <button className="login">
            <Link to={"/login"}>Login</Link>
          </button>
          <Button className="register">
            <Link to={"/register"}>Register</Link>
          </Button>
        </div>
        <video className="video" autoPlay loop muted>
        <source src={vid} type="video/mp4" />
      </video>
      <div className="overlay"></div>
      </div>
    </div>
  );
}

export default Home;
