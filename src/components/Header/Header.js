import React from "react";
import {
  Button,
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
} from "react-bootstrap";

import { Link } from "react-router-dom";
import useAuth from "../../contexts/useAuth";
import "./Header.css";

function Header(props) {
  const { user, logOut } = useAuth();
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Susrusha</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link className="link" to="/home">
                Home
              </Link>
              <Link className="link" to="/services">
                Services
              </Link>
              <Link className="link" to="/about">
                About
              </Link>
              <Link className="link" to="/emergency">
                Emergency
              </Link>

              {user?.email ? (
                <Button onClick={logOut}>Logout</Button>
              ) : (
                <Link className="link" to="/login">
                  Login
                </Link>
              )}
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
        <h4>Signed In As:{user?.name}</h4>
      </Navbar>
    </div>
  );
}

export default Header;
