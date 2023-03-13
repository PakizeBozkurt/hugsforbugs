import { useState } from "react";
import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import NavBar from "./NavBar";
import Footer from "./Footer/Footer";

function CreateAvailability() {
  const [date, setDate] = useState(new Date());
  const [topic, setTopic] = useState("");
  let id = localStorage.getItem("id");
  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "date") {
      setDate(new Date(value));
    } else if (name === "topic") {
      setTopic(value);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const formattedDate = `${date.getFullYear()}-${(
      "0" +
      (date.getMonth() + 1)
    ).slice(-2)}-${("0" + date.getDate()).slice(-2)}`;
    const available = {
      availability_date: formattedDate,
      topic: topic,
      trainees_id: id,
    };
    fetch("https://study-buddies.onrender.com/availability", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify(available),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          alert(data.error);
        } else {
          alert("You have created a new available date!");
          window.location.href = "/home";
        }
      })
      .catch((err) => console.log(err));
  };

  const handleBack = (event) => {
    event.preventDefault();
    window.location.href = "/home";
  };

  return (
    <div>
      <NavBar />

      <div className="container row col-md-6 mt-5 mx-auto">
        <h1 align="center" className="pt-4">
          AVAILABILITY
        </h1>
        <Form style={{ width: "50%", margin: "auto" }}>
          <Form.Group controlId="formBasicDate">
            <Form.Label style={{ color: "darkblue" }}>Date</Form.Label>
            <Form.Control
              type="date"
              min={new Date().toISOString().split("T")[0]}
              name="date"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicTopic">
            <Form.Label style={{ color: "darkblue" }}>Topic</Form.Label>
            <Form.Control
              className="col-md-6"
              feedback="Please enter a topic."
              invalid
              type="text"
              placeholder="Topic"
              name="topic"
              onChange={handleChange}
            />
          </Form.Group>
          <Button
            onClick={handleSubmit}
            className="btn btn-outline-info"
            style={{ float: "right", margin: "10px" }}
          >
            Add availability
          </Button>
          <Button
            onClick={handleBack}
            className="btn btn-outline-info"
            style={{ float: "right", margin: "10px" }}
          >
            Back
          </Button>
        </Form>
        <Footer />
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <Form style={{ width: "50%", margin: "auto" }}>
              <Form.Group controlId="formBasicDate">
                <Form.Label style={{ color: "darkblue" }}>Date</Form.Label>
                <Form.Control
                  type="date"
                  min={new Date().toISOString().split("T")[0]}
                  name="date"
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formBasicTopic">
                <Form.Label style={{ color: "darkblue" }}>Topic</Form.Label>
                <Form.Control
                  className="col-md-6"
                  feedback="Please enter a topic."
                  invalid
                  type="text"
                  placeholder="Topic"
                  name="topic"
                  onChange={handleChange}
                />
              </Form.Group>
              <Button
                onClick={handleSubmit}
                className="btn btn-outline-info"
                style={{ float: "right", margin: "10px" }}
              >
                Add availability
              </Button>
              <Button
                onClick={handleBack}
                className="btn btn-outline-info"
                style={{ float: "right", margin: "10px" }}
              >
                Back
              </Button>
            </Form>
            {/* <Footer /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateAvailability;
