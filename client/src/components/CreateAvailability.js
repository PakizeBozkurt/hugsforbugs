import { useState } from "react";
import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faPlus } from "@fortawesome/free-solid-svg-icons";
import { Card } from "react-bootstrap";
import Heading from "./Heading";

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
    fetch("https://starter-kit-0qci.onrender.com/api/availability", {
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
          window.location.reload();
        }
      })
      .catch((err) => console.log(err));
  };

  const handleBack = (event) => {
    event.preventDefault();
    window.location.href = "/my-matches";
  };

  return (
    <div>
      <div>
        <div>
          <div className="container">
            <div className="row">
              <div className="col-md-6 mt-5 mx-auto">
                <Form onSubmit={handleSubmit}>
                  <div>
                    <h6 className="h3 mb-3 font-weight-normal">
                      Create Availability
                    </h6>
                  </div>
                  <Form.Group>
                    <Form.Label>Date</Form.Label>
                    <Form.Control
                      type="date"
                      className="form-control"
                      min={new Date().toISOString().split("T")[0]}
                      max={
                        new Date(new Date().setMonth(new Date().getMonth() + 1))
                          .toISOString()
                          .split("T")[0]
                      }
                      name="date"
                      onChange={handleChange}
                      required
                      style={{ width: 200 }}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Topic</Form.Label>
                    <Form.Control
                      type="text"
                      className="form-control"
                      name="topic"
                      value={topic}
                      onChange={handleChange}
                      required
                      style={{ width: 200 }}
                    />
                  </Form.Group>
                  <div className="d-flex justify-content-sm-evenly">
                    <Button variant="outline-primary" type="submit">
                      <FontAwesomeIcon icon={faPlus} />
                    </Button>

                    <Button
                      variant="outline-warning"
                      type="submit"
                      onClick={handleBack}
                    >
                      <FontAwesomeIcon icon={faArrowLeft} />
                    </Button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateAvailability;