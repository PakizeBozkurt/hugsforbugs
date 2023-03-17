import React from "react";
import SendEmail from "./SendEmail";

function AvailabilityCards(props) {
  return (
    <div className="col-md-4 cards">
      <div className="card mb-4 cardDesign shadow-sm">
        <div className="container">
          <div className="card-body">
            <h2 className="card-text cardHeading">
              Name: {props.trainee.name}
            </h2>
            <p className="card-text cardFonts">
              Date:{" "}
              {new Date(props.trainee.availability_date).toLocaleDateString()}
            </p>
            <p className="card-text cardFonts">Topic: {props.trainee.topic}</p>
            <div className="cardBtn">
              <SendEmail trainee={props.trainee} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AvailabilityCards;
