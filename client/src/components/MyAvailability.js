import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer/Footer";
import CreateAvailability from "./CreateAvailability";
import MyAvailabilityCards from "./MyAvailabilityCards";
import Heading from "./Heading";

const MyAvailability = () => {
  const [myDate, setMyDates] = useState([]);

  useEffect(() => {
    fetch(
      `https://study-buddies.onrender.com/availability/${localStorage.getItem(
        "id"
      )}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setMyDates(data);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(myDate);

  return (
    <div>
      <div>
        <NavBar />
      </div>
      <Heading name={"My Availability"} />
      <div>
        <div>
          <CreateAvailability />
          <hr />
          <div className="container">
            <div className="row">
              {myDate.map((date) => {
                return (
                  <MyAvailabilityCards
                    key={date.id}
                    date={date}
                    dates={myDate}
                    setDates={setMyDates}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyAvailability;
