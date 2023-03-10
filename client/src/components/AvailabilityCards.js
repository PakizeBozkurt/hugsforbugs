import React from "react";
import SendEmail from "./SendEmail";
function AvailibityCards(props) {
  return (
    <div className="container">
      <div className="card-body">
        <h2 className="card-text">Name: {props.trainee.name}</h2>
        <h5 className="card-text">
          Date: {new Date(props.trainee.availability_date).toLocaleDateString()}
        </h5>
        <p className="card-text">Topic: {props.trainee.topic}</p>

        <SendEmail trainee={props.trainee} />
      </div>
    </div>
  );
}

export default AvailibityCards;
