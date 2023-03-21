import React from "react";
import DeleteMyAvailability from "./DeleteMyAvailability";
import EditMyAvailability from "./EditMyAvailability";


function MyAvailabilityCards(props) {
  return (

    <div className="col-md-4 cards">
      <div className="card mb-4 cardDesign shadow-sm">
        <div >
          <div >
            <h5 className="card-title">
              {" "}
              Date:{" "}
              {new Date(props.date.availability_date).toLocaleDateString()}
            </h5>
            <h6 className="card-subtitle mb-2 text-muted">
              Topic: {props.date.topic}
            </h6>
          </div>
          <div className="d-flex justify-content-end">
            <DeleteMyAvailability id={props.date.id} />
            <EditMyAvailability id={props.date.id} />
          </div>
        </div>
      </div>
    </div>


  );
}

export default MyAvailabilityCards;