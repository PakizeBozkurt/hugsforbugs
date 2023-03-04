import React from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Footer from "./Footer/Footer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;

const Register = () => {
  const [name, setFirstName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");
  const [passwordShown, setPasswordShown] = React.useState(false);
  const handleChange = (e) => {
    if (e.target.name === "firstName") {
      setFirstName(e.target.value);
    } else if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  const register = (e) => {
    e.preventDefault();
    const user = {
      name,
      email,
      password,
    };
    fetch("https://study-buddies.onrender.com/register", {
      // this API comes from render.com
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.msg === "User created") {
          setErrorMessage("User created");
          window.location.href = "/login";
        } else if (data.errors[0].msg === "User already exists") {
          setErrorMessage("User already exists");
        } else if (!email.includes("@")) {
          setErrorMessage("Please enter a valid email");
        } else if (password.length < 6) {
          setErrorMessage(
            "Please enter a password that is at least 6 characters"
          );
        } else {
          setErrorMessage("Fill in all fields");
        }
      })
      .catch((err) => console.log(err));
  };
  const handleBack = (e) => {
    e.preventDefault();
    window.location.href = "/";
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <h5>{errorMessage}</h5>
            <Form style={{ width: "50%", margin: "auto" }}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label style={{ color: "goldenrod" }}>
                  First Name
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter First Name"
                  name="firstName"
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label style={{ color: "goldenrod" }}>
                  Email address
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label style={{ color: "goldenrod" }}>
                  Password <i onClick={togglePasswordVisiblity}>{eye}</i>
                </Form.Label>
                <Form.Control
                  type={passwordShown ? "text" : "password"}
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                />
              </Form.Group>
              <Button
                variant="outline-success"
                style={{ margin: "10px" }}
                type="submit"
                onClick={register}
              >
                Register
              </Button>
              <Button
                variant="outline-success"
                style={{ margin: "10px" }}
                type="submit"
                onClick={handleBack}
              >
                Back
              </Button>
            </Form>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
