import React from "react";

const ResultPage = (props) => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Search"
              value={props.search}
              onChange={props.handleSearch}
            />
          </div>
          <div className="col-md-6">
            <div className="btn-group" role="group" aria-label="Basic example">
              <button
                type="button"
                className={`btn btn-${
                  props.selected === "daily" ? "info" : "outline-info"
                }`}
                value="daily"
                onClick={props.handleFilter}
              >
                Daily
              </button>
              <button
                type="button"
                className={`btn btn-${
                  props.selected === "weekly" ? "info" : "outline-info"
                }`}
                value="weekly"
                onClick={props.handleFilter}
              >
                Weekly
              </button>
              <button
                type="button"
                className={`btn btn-${
                  props.selected === "monthly" ? "info" : "outline-info"
                }`}
                value="monthly"
                onClick={props.handleFilter}
              >
                Monthly
              </button>
            </div>
          </div>
        </div>
      </div>

      <h4 className="noResultHeading">
        There is no available trainee for this date. Please check weekly and
        monthly availability.
      </h4>
    </div>
  );
};

export default ResultPage;
