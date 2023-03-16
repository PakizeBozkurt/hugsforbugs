import React, { useEffect, useState } from "react";
import ResultPage from "./ResultPage";
import NavBar from "./NavBar";
import AvailabilityCards from "./AvailabilityCards";
import Heading from "./Heading";
import Footer from './Footer/Footer';
import "./availabilityCards.css";
import "./main.css";

const AllUsers = () => {
  const [trainees, setTrainees] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("monthly");
  const [selected, setSelected] = useState("monthly");
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
                aria-label="Buttons to display all users"
              >
                <button
                  type="button"
                  className={`btn btn-${selected === "monthly" ? "info" : "outline-info"
                    }`}
                  value="monthly"
                  onClick={handleFilter}
                >
                  AllUsers
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
                aria-label="Buttons to filter results"
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
      <Footer />
    </div>
  );
};

export default AllUsers;
