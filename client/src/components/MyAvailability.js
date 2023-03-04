import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";

const MyAvailability = () => {
    const [myDate, setMyDates] = useState([]);

    useEffect(() => {
        fetch(`https://study-buddies.onrender.com/availability/${localStorage.getItem("id")}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: localStorage.getItem("token"),
            }
        })
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
            <h1>My Availability</h1>
            <div>
                <div>
                    <div className="container">
                        <div className="card-body">
                            <div className="row">
                                {myDate.map((date) => (
                                    <div className="col-md-4">
                                        <div className="card mb-4 shadow-sm">
                                            <div className="card-body">
                                                <p className="card-text">
                                                    <strong>Date: </strong>
                                                    {new Date(date.availability_date).toLocaleDateString()}
                                                </p>
                                                <p className="card-text">
                                                    <strong>Topic: </strong>
                                                    {date.topic}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyAvailability;