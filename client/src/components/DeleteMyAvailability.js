import React from "react";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
function DeleteMyAvailability(props) {
  const handleDelete = (e) => {
    e.preventDefault();
    fetch(
      `https://starter-kit-0qci.onrender.com/api/availability/${props.id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          alert(data.error);
        } else {
          alert("You have deleted this available date!");
          window.location.reload();
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <Button variant="outline-danger" onClick={handleDelete}>
          <FontAwesomeIcon icon={faTrashAlt} />
      </Button>
    </div>
  );
}

export default DeleteMyAvailability;