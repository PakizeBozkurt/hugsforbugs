import React from "react";
import { Container, Nav, Navbar, Image } from "react-bootstrap";
import UserInfoMenu from "./UserInfoMenu";
function NavBar() {
  return (
    <div>
<<<<<<< HEAD
      <Container>
        <Navbar.Brand>
          <Image
            src="https://codeyourfuture.io/wp-content/uploads/2019/03/cyf_brand.png"
            alt="Code Your Future"
            width="100"
            height="50"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" />
        <Nav className="me-auto"></Nav>
        <Nav.Link href="/allusers">All Users</Nav.Link>
        <Navbar.Brand href="/home">SB</Navbar.Brand>
=======
      <Navbar bg="dark" variant="dark" expand="lg">
    <Container>
        <Navbar.Brand href="/home"><Image src="https://codeyourfuture.io/wp-content/uploads/2019/03/cyf_brand.png" alt="Code Your Future" width="100" height="50" />
        </Navbar.Brand>
>>>>>>> 19b3efb (NavBar called)
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/all">All Users</Nav.Link>
            <Nav.Link href="/myavailability">My Availabilities</Nav.Link>
            <Nav.Link href="/createavailability">Create Availability</Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <UserInfoMenu />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </div>
  );
}

export default NavBar;
