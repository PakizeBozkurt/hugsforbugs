
import React from "react";
// import logo from "client/src/components/download.png";
import vid from "./pexels-c-technical-6334253.mp4"
import "./heading.css" ;
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';


function Heading() {
  return (
    <div>
<h1 className="head">Welcome to Study Buddies</h1>

<Button variant="primary" size="lg">
        <Link to ={"/Home"}>Get Start </Link>
        </Button>{' '}

  <video className="video" autoPlay loop muted>     
  <source
    src={vid}
    type="video/mp4"
  />
</video>
</div>
  );
}

export default Heading;

