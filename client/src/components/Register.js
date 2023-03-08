import React from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import Footer from "./Footer/Footer";
import "../../src/register.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
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
    setValidated(true);
  };
  const handleBack = (e) => {
    e.preventDefault();
    window.location.href = "/";
  };

  return (
    <div className="container row col-md-6 mt-5 mx-auto">
      <h2 style={{ fontSize: "2.2em" }} className="text-center text-light">
        REGISTER{" "}
      </h2>

      <Form
        noValidate
        validated={validated}
        onSubmit={handleChange}
        style={{ width: "50%", margin: "auto" }}
      >
        <h3 className="mb-2 text-danger font-italic">{errorMessage}</h3>
        <Form.Group as={Col} className="mb-4" controlId="formBasicEmail">
          <Form.Label className="text-light">First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            onChange={handleChange}
            name="firstName"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} className="mb-4" controlId="formBasicEmail">
          <Form.Label className="text-light">Email</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="email"
              placeholder="email"
              aria-describedby="inputGroupPrepend"
              onChange={handleChange}
              name="email"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please enter a valid email.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>

        <Form.Group
          as={Col}
          className="mb-4"
          md="6"
          controlId="validationCustom05"
        >
          <Form.Label className="text-light">
            Password <i onClick={togglePasswordVisiblity}>{eye}</i>
          </Form.Label>
          <Form.Control
            type={passwordShown ? "text" : "password"}
            placeholder="password"
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
        <Button type="submit" onClick={handleSubmit}>
          Submit form
        </Button>
        <Button
          variant="outline-light"
          style={{ margin: "10px" }}
          type="submit"
          onClick={handleBack}
        >
          Back
        </Button>
      </Form>
      <Footer />
    </div>
  );
};

export default Register;
