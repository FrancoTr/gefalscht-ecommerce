import React from "react";
import { Navbar as Navbarboots, Container, Nav } from "react-bootstrap";
import logo from "../../images/fakeicon.svg";

const Navbar = () => {
  return (
    <>
      <Navbarboots expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbarboots.Brand href="/">
            <img
              alt="logo"
              src={logo}
              width="auto"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Gefalscht E-commerce
          </Navbarboots.Brand>
        </Container>
        <Container>
          <Nav>
            <Nav.Link>Category #1</Nav.Link>
            <Nav.Link>Category #2</Nav.Link>
            <Nav.Link>Category #3</Nav.Link>
          </Nav>
        </Container>
      </Navbarboots>
    </>
  );
};

export default Navbar;
