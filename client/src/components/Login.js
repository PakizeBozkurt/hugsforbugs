import React from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "./Footer/Footer";

import { faEye } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [err, setErr] = React.useState(false);
  const [passwordShown, setPasswordShown] = React.useState(false);
  
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  const handleBack = (e) => {
    e.preventDefault();
    window.location.href = "/";
  };
  const login = (e) => {
    e.preventDefault();
    const user = {
      email,
      password,
    };
    fetch("https://study-buddies.onrender.com/login", {
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
          localStorage.setItem("email", email);
          localStorage.setItem("name", data.name);
          localStorage.setItem("id", data.id);
          window.location.href = "/createavailability";
        } else {
          alert("Wrong email or password");
          window.location.reload();
          setErr(true);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <Form style={{ width: "50%", margin: "auto" }}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label style={{ color: "goldenrod" }}>
                  Email address
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  onChange={handleEmail}
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
                  onChange={handlePassword}
                />
              </Form.Group>
              <Button
                variant="outline-success"
                style={{ margin: "10px" }}
                type="submit"
                onClick={login}
              >
                Login
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

export default Login;
