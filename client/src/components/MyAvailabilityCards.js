import React from "react";
import DeleteMyAvailability from "./DeleteMyAvailability";
import EditMyAvailability from "./EditMyAvailability";

function MyAvailabilityCards(props) {
  return (
    <div>
      <div>
        <div className={"card"}>
          <div className={"card-body"}>
            <h5 className="card-title">
              {" "}
              Date:{" "}
              {new Date(props.date.availability_date).toLocaleDateString()}
            </h5>
            <h6 className="card-subtitle mb-2 text-muted">
              Topic: {props.date.topic}
            </h6>
          </div>
          <div>
            <DeleteMyAvailability id={props.date.id} />
            <EditMyAvailability id={props.date.id} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyAvailabilityCards;
