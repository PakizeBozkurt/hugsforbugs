import React from "react";
// import logo from "/Users/nagehan/Documents/hugsforbugs/client/src/components/logo.png";
import vid from "./pexels-c-technical-6334253.mp4";
import "./home.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import HeadingHome from "./HeadingHome";
import Subheading from "./Subheading";
import Footer from "./Footer/Footer";

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
      <HeadingHome name={"Study Buddies"} />
      <Subheading />

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
