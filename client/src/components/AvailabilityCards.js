import React from "react";
import SendEmail from "./SendEmail";

function AvailibityCards(props) {
  return (
    <div className="container">
      <div className="card-body">
        <h2
          className="card-text"
          style={{ fontFamily: "sen", fontSize: "32px" }}
        >
          Name: {props.trainee.name}
        </h2>
        <p
          className="card-text"
          style={{ fontFamily: "Roboto", fontSize: "13px" }}
        >
          Date: {new Date(props.trainee.availability_date).toLocaleDateString()}
        </p>
        <p
          className="card-text"
          style={{ fontFamily: "Roboto", fontSize: "13px" }}
        >
          Topic: {props.trainee.topic}
        </p>
        <div style={{ position: "absolute", right: "8px", bottom: "8px" }}>
          <SendEmail trainee={props.trainee} />
        </div>
      </div>
    </div>
  );
}

export default AvailibityCards;
