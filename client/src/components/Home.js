import React from "react";
import vid from "./pexels-c-technical-6334253.mp4";
import "./home.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Heading from "./Heading";
import Footer from "./Footer/Footer";
import content from "./content";

function Home() {
  return (
    <div>
      <Heading level={1}>{content.home.title}</Heading>
      <Heading level={2}>{content.home.subTitle}</Heading>

      <p>
        Check availability and connect with friends and other CYF trainees.
        Study together or join study groups. Make collaboration easier and more
        productive.
      </p>
      <div>
        <button>
          <Link to={"/login"}>Login</Link>
        </button>
      </div>
      <span>
        <Button className="button" variant="primary" size="lg">
          <Link to={"/register"}>Register</Link>
        </Button>{" "}
      </span>
      <video className="video" autoPlay loop muted>
        <source src={vid} type="video/mp4" />
      </video>
      <Footer />
    </div>
  );
}

export default Home;
