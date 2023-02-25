import React from "react";
// import logo from "/Users/nagehan/Documents/hugsforbugs/client/src/components/logo.png";
import vid from "./pexels-c-technical-6334253.mp4";
import "./home.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Headings from "./Heading";
import Subheading from "./Subheading";

function Home() {
  return (
    <div>
      {/* <img
					className="logo"
					data-qa="logo"
					src={logo}
					alt="Just the React logo"
				/>
			 */}
      <Headings />
      <Subheading />
      <p>Find your Study Buddy</p>
      <p>
        The Study Buddy is an idea to help you with your learning by sharing
        experiences with other CYF trainees taking the same goal. Meet, chat,
        and study with students from all classes . Create your very own study
        room with atmospheric backgrounds, personal timers, and goals. Join
        motivated students from all CYF trainees to boost your productivity and
        find your study flow.
      </p>
      <Button className="button" variant="primary" size="lg">
        <Link to={"/Home"}>Get Started</Link>
      </Button>{" "}
      <video className="video" autoPlay loop muted>
        <source src={vid} type="video/mp4" />
      </video>
    </div>
  );
}

export default Home;
