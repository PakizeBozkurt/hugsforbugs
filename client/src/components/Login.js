import React from "react";
import { Form } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "./Footer/Footer";
import "./Register.css";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import Heading from "./Heading";
import NavBar from "./NavBar";

const eye = <FontAwesomeIcon icon={faEye} />;

const Login = () => {
  const [validated, setValidated] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [err, setErr] = React.useState(false);
  const [passwordShown, setPasswordShown] = React.useState(false);

  const handleChange = (e) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  const handleBack = (e) => {
    e.preventDefault();
    window.location.href = "/";
  };
  const login = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    e.preventDefault();
    const user = {
      email,
      password,
    };
    fetch("https://starter-kit-0qci.onrender.com/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.token) {
          localStorage.setItem("token", data.token);
          localStorage.setItem("email", data.email);
          localStorage.setItem("name", data.name);
          localStorage.setItem("id", data.id);
          window.location.href = "/my-matches";
        } else {
          setErr(true);
          window.location.reload();
        }
      })
      .catch((err) => console.log(err));
    setValidated(true);
  };

  return (
    <div>
      <NavBar />
      <div className="container">
        <div className="header">
          <Heading name={"Login"} />
        </div>
        <Form noValidate validated={validated} onSubmit={handleChange}>
          <Form.Group
            as={Col}
            className="input-field"
            controlId="formBasicEmail"
          >
            <InputGroup hasValidation>
              <Form.Control
                type="email"
                className="input"
                placeholder="Enter email"
                name="email"
                onChange={handleChange}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid email.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>

          <Form.Group
            controlId="formBasicPassword"
            className="input-field password-container"
          >
            <Form.Label>
              <i onClick={togglePasswordVisiblity}>{eye}</i>
            </Form.Label>
            <Form.Control
              type={passwordShown ? "text" : "password"}
              className="input"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              minLength={6}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid password.
            </Form.Control.Feedback>
          </Form.Group>
          <div className="btn">
            <button className="signUp-btn" type="submit" onClick={login}>
              Login
            </button>
            <button className="cancel-btn" type="submit" onClick={handleBack}>
              Back
            </button>
          </div>
        </Form>
        <Footer />
      </div>
    </div>
  );
};

export default Login;
