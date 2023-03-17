import React, { useState, useEffect } from "react";
import ResultPage from "./ResultPage";
import AvailabilityCards from "./AvailabilityCards";
import Heading from "./Heading";
import NavBar from "./NavBar";

function AvailableTrainees() {
  const [trainees, setTrainees] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("daily");
  const [selected, setSelected] = useState("daily");

  useEffect(() => {
    fetch(
      `https://starter-kit-0qci.onrender.com/api/availabilities?search=${search}&filter=${filter}`,
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

  const handleFilter = (event) => {
    event.preventDefault();
    if (event.target.innerText === "Daily") {
      setFilter("daily");
      setSelected("daily");
    } else if (event.target.innerText === "Weekly") {
      setFilter("weekly");
      setSelected("weekly");
    } else if (event.target.innerText === "Monthly") {
      setFilter("monthly");
      setSelected("monthly");
    }
  };

  return (
    <div>
      <NavBar />
      <Heading name={"List of Trainees with Matching Availability"} />
      {trainees.length < 1 ? (
        <div>
          <ResultPage
            handleFilter={handleFilter}
            handleSearch={handleSearch}
            search={search}
            selected={selected}
          />
        </div>
      ) : (
        <div>
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
                <div
                  className="btn-group"
                  role="group"
                  aria-label="Buttons to filter results"
                >
                  <button
                    type="button"
                    className={`btn btn-${
                      selected === "daily" ? "info" : "outline-info"
                    }`}
                    value="daily"
                    onClick={handleFilter}
                  >
                    Daily
                  </button>
                  <button
                    type="button"
                    className={`btn btn-${
                      selected === "weekly" ? "info" : "outline-info"
                    }`}
                    value="weekly"
                    onClick={handleFilter}
                  >
                    Weekly
                  </button>
                  <button
                    type="button"
                    className={`btn btn-${
                      selected === "monthly" ? "info" : "outline-info"
                    }`}
                    value="monthly"
                    onClick={handleFilter}
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
                <div
                  className="btn-group"
                  role="group"
                  aria-label="Basic example"
                ></div>
              </div>
            </span>
          </div>

          <div className="container">
            <div className="row">
              {trainees.map((trainee) => {
                return (
                  <AvailabilityCards
                    key={trainee.id}
                    trainee={trainee}
                    trainees={trainees}
                    setTrainees={setTrainees}
                  />
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AvailableTrainees;
