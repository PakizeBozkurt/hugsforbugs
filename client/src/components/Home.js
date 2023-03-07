import React from "react";
import vid from "./pexels-c-technical-6334253.mp4";
import "./home.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

import Heading from "./Heading";
import Subheading from "./Subheading";
import Footer from "./Footer/Footer";
import content from "./content";

// import Footer from "./Footer/Footer";


function Home() {

  function handleRegisterBtn(){
    window.location.href = "/register"; 
  }

  function handleLoginBtn(){
    window.location.href = "/login";  
  }

  return (
    <div>
      <Heading level={1}>{content.home.title}</Heading>
      <Subheading>{content.home.subtitle}</Subheading>

      <p>{content.home.text}</p>
      <div>
        <button>
          <Link to={"/login"}>Login</Link>
        </button>
      </div>
      {/* <Footer />   */}
    </div>
  );
}

export default Home;
