import React from "react";
import "./Heading.css";

function Heading(props) {
  return <h2 className="heading">{props.name}</h2>;
}

export default Heading;
