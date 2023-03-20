import React from "react";
import { Container, Nav, Navbar, Image } from "react-bootstrap";
import UserInfoMenu from "./UserInfoMenu";
import logo from "../logo.png";


function NavBar() {
  return (
    <div>
      {localStorage.getItem("token") ? (
        <Navbar bg="light" variant="light" expand="lg">
          <Container>
            <Navbar.Brand href="/all-users">
              <Image
                src={logo}
                alt="Code Your Future"
                height="50"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse
              className="d-flex justify-content-end"
              id="basic-navbar-nav"
            >
              <Nav className="p-2">
                <Nav.Link className="nav-link" href="/all-users">
                  All Users
                </Nav.Link>
                <Nav.Link className="nav-link" href="/my-matches">
                  My Matches
                </Nav.Link>
                <Nav.Link className="nav-link" href="/my-availability">
                  My Availability
                </Nav.Link>
              </Nav>
              <Nav className="ml-auto">
                <UserInfoMenu />
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      ) : (
        <Navbar bg="light" variant="light" expand="lg">
          <Container>
            <Navbar.Brand href="/">
              <Image
                src={logo}
                alt="Code Your Future"
                height="50"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse
              className="d-flex justify-content-end"
              id="basic-navbar-nav"
            >
              <Nav className="p-2">
                {window.location.href.endsWith("/register") ? (
                  <Nav.Link href="/login">Login</Nav.Link>
                ) : (
                  <Nav.Link href="/register">Register</Nav.Link>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )}
    </div>
  );
}

export default NavBar;
