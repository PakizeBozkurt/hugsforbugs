import React from "react";
import { Form } from "react-bootstrap";
import "./Register.css";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
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
          localStorage.setItem("email", data.email);
          localStorage.setItem("name", data.name);
          localStorage.setItem("id", data.id);
          window.location.href = "/createavailability";
        } else {
          setErr("Invalid email or password");
        }
      })
      .catch((err) => console.log(err));
    setValidated(true);
  };

  return (
    <div>
      <div className="container">
        <h1>Login</h1>
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <h5>{err}</h5>
            <Form>
              <Form.Group className="input-field" controlId="formBasicEmail">
                <Form.Control
                  className="input"
                  type="email"
                  placeholder="Enter email..."
                  name="email"
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group
                className="input-field password-container"
                controlId="formBasicPassword"
              >
                <Form.Control
                  className="input"
                  type={passwordShown ? "text" : "password"}
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                />
                <i onClick={togglePasswordVisiblity}>{eye}</i>
              </Form.Group>
              <div className="btn">
                <button
                  className="cancel-btn"
                  variant="outline-success"
                  // style={{ margin: "10px" }}
                  type="submit"
                  onClick={handleBack}
                >
                  Cancel
                </button>
                <button
                  className="signUp-btn"
                  variant="outline-success"
                  // style={{ margin: "10px" }}
                  type="submit"
                  onClick={login}
                >
                  Login
                </button>
              </div>
            </Form>
            {/* <Footer /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
