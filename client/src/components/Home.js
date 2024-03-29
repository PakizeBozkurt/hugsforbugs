import React from "react";
import vid from "./pexels-c-technical-6334253.mp4";
import "./home.css";
import HeadingHome from "./HeadingHome";
import Subheading from "./Subheading";

function Home() {
  function handleRegisterBtn() {
    window.location.href = "/register";
  }

  function handleLoginBtn() {
    window.location.href = "/login";
  }

  return (
    <div className="showcase">
      <div className="text">
        <HeadingHome name={"Study Buddies"} />
        <Subheading>Boost Your Productivity</Subheading>
        <p>
          Check availability and connect with friends and other CYF trainees.
          Study together or join study groups. Make collaboration easier and
          more productive
        </p>
      </div>
      <div className="btn-wrapper">
        <button className="login" onClick={handleLoginBtn}>
          Login
        </button>
        <button className="register" onClick={handleRegisterBtn}>
          Register
        </button>
      </div>
      <video className="video" autoPlay loop muted>
        <source src={vid} type="video/mp4" />
      </video>
      <div className="overlay"></div>
    </div>
  );
}

export default Home;
