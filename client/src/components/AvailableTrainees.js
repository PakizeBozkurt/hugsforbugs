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
      <div>
        <NavBar />
      </div>
      {trainees.length <= 1 ? (
        <div>
          <ResultPage filter={setFilter} />
        </div>
      ) : (
        <div>
          <Heading name={"All Available Trainees"} />
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
                  aria-label="Button to filter by results"
                >
                  <button
                    type="button"
                    className="btn btn-outline-info"
                    onClick={handleFilter}
                  >
                    Daily
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-info"
                    onClick={handleFilter}
                  >
                    Weekly
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-info"
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
                  <div className="col-md-4 cards ">
                    <div className="card mb-4 cardDesign shadow-sm ">
                      <AvailabilityCards
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
      )}
    </div>
  );
}

export default AvailableTrainees;
