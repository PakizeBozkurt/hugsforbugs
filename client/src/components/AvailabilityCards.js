import React from "react";
import SendEmail from "./SendEmail";
function AvailibityCards(props) {
  return (
    <div>
      <div>
        <div className="container">
          <div className="card-body">
            <h2 className="card-text">Name: {props.trainee.name}</h2>
            <h2 className="card-text">
              Date:{" "}
              {new Date(props.trainee.availability_date).toLocaleDateString()}
            </h2>
            <h2 className="card-text">Topic: {props.trainee.topic}</h2>
            <h2 className="card-text">
              NOTIFY BY EMAIL <SendEmail trainee={props.trainee} />
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AvailibityCards;
