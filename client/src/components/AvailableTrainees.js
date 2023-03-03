import React from "react";
// import Button from "react-bootstrap/Button";
import { useState } from "react";
import Logout from "./Logout";
import { Link } from "react-router-dom";
import AvailibityCards from "./AvailabilityCards";

function AvailableTrainees() {
	const [trainees, setTrainees] = React.useState([]);
	const [search, setSearch] = useState("");
	const [filter, setFilter] = useState("daily");

	React.useEffect(() => {
		fetch(
			`https://study-buddies.onrender.com/availabilities?search=${search}&filter=${filter}`,
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					Authorization: localStorage.getItem("token"),
				},
			}
		)
			.then((response) => response.json())
			.then((data) => {
				setTrainees(data.data);
			});
	}, [search, filter]);

	const handleSearch = (event) => {
		const { value } = event.target;
		setSearch(value);
	};

	function handleDailyFilter() {
		setFilter("daily");
	}

	function handleWeeklyFilter() {
		setFilter("weekly");
	}

	function handleMonthlyFilter() {
		setFilter("monthly");
	}

	return (
    <div
      style={{
        background:
          "linear-gradient(rgba(102, 126, 234, 0.5), rgba(118, 75, 162, 0.5))",
      }}
    >
      <Logout />
      <h1 style={{ color: "black", textAlign: "center" }}>
        TRAINEES WITH MATCHING AVAILABILITY
      </h1>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Search"
              value={search}
              onChange={handleSearch}
            />
          </div>
          <div className="col-md-6">
            <div className="btn-group" role="group" aria-label="Basic example">
              <button
                type="button"
                className="btn btn btn-primary cursor-pointer"
                onClick={handleDailyFilter}
              >
                Daily
              </button>
              <button
                type="button"
                className="btn btn btn-primary cursor-pointer"
                onClick={handleWeeklyFilter}
              >
                Weekly
              </button>
              <button
                type="button"
                className="btn btn btn-primary cursor-pointer"
                onClick={handleMonthlyFilter}
              >
                Monthly
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <span>
          <div className="col-md-6">
            <div className="btn-group" role="group" aria-label="Basic example">
              <button
                className="btn btn btn-primary"
                style={{ float: "right", margin: "10px" }}
              >
                <Link
                  to="/availabilities"
                  style={{ textDecoration: "none" }}
                  className="btn btn btn-primary"
                >
                  Add Availability
                </Link>
              </button>
            </div>
          </div>
        </span>
      </div>
      <div className="container">
        <div className="row">
          {trainees.map((trainee) => {
            return (
              <div className="col-md-6">
                <div
                  className="card mb-4 shadow-sm"
                  style={{
                    background: "#2f4d0a",
                    border: "black solid 1px",
                    margin: "2px",
                    padding: "2px",
                  }}
                >
                  <AvailibityCards
                    key={trainee.id}
                    trainee={trainee}
                    trainees={trainees}
                    setTrainees={setTrainees}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default AvailableTrainees;

