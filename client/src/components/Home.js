import React from "react";
import vid from "./pexels-c-technical-6334253.mp4";
import "./home.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Heading from "./Heading";
import Subheading from "./Subheading";
import Footer from "./Footer/Footer";
import content from "./content";

function Home() {
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
