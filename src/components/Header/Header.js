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
import "./Header.css";

function Header(props) {
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
              <Button style={{ marginRight: "5px" }}>Login</Button>
              <Button>Logout</Button>

              <Nav.Link href="#" disabled>
                Our Care is to make you feel happy!
              </Nav.Link>
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
      </Navbar>
    </div>
  );
}

export default Header;
