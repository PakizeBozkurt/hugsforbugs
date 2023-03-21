import React, { useState, useEffect } from "react";
import { Form, Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { faClose, faEdit, faSave } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function EditMyAvailability(props) {
  const [edit, setEdit] = useState(false);
  const [trainees_id, setTrainees_id] = useState(localStorage.getItem("id"));
  const [date, setDate] = React.useState(new Date());
  const [topic, setTopic] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");

  const handleUpdate = (e) => {
    e.preventDefault();
    const formattedDate = `${date.getFullYear()}-${(
      "0" +
      (date.getMonth() + 1)
    ).slice(-2)}-${("0" + date.getDate()).slice(-2)}`;
    const available = {
      availability_date: formattedDate,
      topic: topic,
      trainees_id: trainees_id,
    };
    fetch(
      `https://starter-kit-0qci.onrender.com/api/availability/${props.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
        body: JSON.stringify(available),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          alert(data.error);
        } else {
          setErrorMessage("You have updated this available date!");
          window.location.reload();
        }
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "date") {
      setDate(new Date(value));
    } else if (name === "topic") {
      setTopic(value);
    }
  };

  return (
    <div>
      <Button variant="outline-primary" onClick={() => setEdit(!setEdit())}>
        <FontAwesomeIcon icon={faEdit} />
      </Button>
      <Modal show={edit} onHide={() => setEdit(!edit)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Availability</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form style={{ width: "50%", margin: "auto" }}>
            <h5>{errorMessage}</h5>
            <Form.Group>
              <Form.Label>Date</Form.Label>
              <Form.Control
                  type="date"
                  className="form-control"
                  min={new Date().toISOString().split('T')[0]}
                  max={new Date(new Date().setMonth(new Date().getMonth() + 1)).toISOString().split('T')[0]}
                  name="date"
                  onChange={handleChange}
                  required
                  style={{width: 200}}
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
                  style={{width: 200}}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            style={{ margin: "10px" }}
            variant="outline-info"
            onClick={() => setEdit(!edit)}
          >

            <FontAwesomeIcon icon={faClose} />
          </Button>
          <br />
          <Button variant="outline-success" onClick={handleUpdate}>
           <FontAwesomeIcon icon={faSave} />
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default EditMyAvailability;