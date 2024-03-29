import React from "react";
import { Form } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import Heading from "./Heading";
import NavBar from "./NavBar";

import "./Register.css";

const eye = <FontAwesomeIcon icon={faEye} />;

const Register = () => {
  const [validated, setValidated] = React.useState(false);
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

  // to be fixed
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    e.preventDefault();
    const user = {
      name,
      email,
      password,
    };

    fetch("https://starter-kit-0qci.onrender.com/api/register", {
      // this API comes from render.com
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "User created") {
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
    setValidated(true);
  };
  const handleBack = (e) => {
    e.preventDefault();
    window.location.href = "/";
  };

  return (
    <div>
      <NavBar />
      <div className="container">
        <div className="header">
          <Heading name={"Register"} />
        </div>
        <div className="row">
          <div>
            <Form noValidate validated={validated} onSubmit={handleChange}>
              <h4 className="mb-2 text-danger font-italic">{errorMessage}</h4>
              <Form.Group className="input-field" controlId="formBasicEmail">
                <Form.Control
                  className="input"
                  required
                  type="text"
                  placeholder="Full name..."
                  onChange={handleChange}
                  name="firstName"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="input-field" controlId="formBasicEmail">
                <InputGroup hasValidation>
                  <Form.Control
                    className="input"
                    required
                    type="email"
                    placeholder="Enter email..."
                    name="email"
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter a valid email.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
              <Form.Group
                className="input-field password-container"
                controlId="fvalidationCustom05"
              >
                {/* TODO: The label eye needs styling */}
                <Form.Label>
                  <i onClick={togglePasswordVisiblity}>{eye}</i>
                </Form.Label>
                <Form.Control
                  className="input"
                  type={passwordShown ? "text" : "password"}
                  placeholder="Password..."
                  onChange={handleChange}
                  name="password"
                  minLength={6}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid password.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Check
                  required
                  label="Agree to terms and conditions"
                  feedback="You must agree before submitting."
                  feedbackType="invalid"
                />
              </Form.Group>
              <div className="btn">
                <button
                  className="cancel-btn"
                  variant="outline-success"
                  type="submit"
                  onClick={handleBack}
                >
                  Cancel
                </button>
                <button
                  className="signUp-btn"
                  variant="outline-success"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Sign up
                </button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
