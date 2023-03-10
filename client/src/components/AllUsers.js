import React, { useEffect, useState } from "react";
import ResultPage from "./ResultPage";
import NavBar from "./NavBar";
import AvailabilityCards from "./AvailabilityCards";
import "./availabilityCards.css";

const AllUsers = () => {
  const [trainees, setTrainees] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("monthly");

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
          <h1
            style={{
              fontFamily: "sen",
              color: "black",
              textAlign: "center",
              marginTop: "100px",
              marginBottom: "50px",
            }}
          >
            Trainees with <br /> matching availability
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
                <div
                  className="btn-group"
                  role="group"
                  aria-label="Basic example"
                >
                  <button
                    type="button"
                    className="btn btn-outline-info"
                    onClick={handleDailyFilter}
                  >
                    Daily
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-info"
                    onClick={handleWeeklyFilter}
                  >
                    Weekly
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-info"
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
                  <div className="col-md-4 cards">
                    <div
                      className="card  mb-4 shadow-sm"
                      style={{
                        background: "#ffffff",
                        border: "none",
                        margin: "2px",
                        padding: "2px",
                      }}
                    >
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
};

export default AllUsers;
