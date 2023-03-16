import React from "react";
import Button from "react-bootstrap/Button";
function DeleteMyAvailability(props) {
  const handleDelete = (e) => {
    e.preventDefault();
    fetch(`https://study-buddies.onrender.com/availability/${props.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    })
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
      <Button variant="outline-success" onClick={handleDelete}>
        Delete
      </Button>
    </div>
  );
}

export default DeleteMyAvailability;
