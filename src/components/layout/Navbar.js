import React from "react";
import NavCategories from "./NavCategories";
import { Navbar as Navbarboots, Container, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import logo from "../../images/fakeicon.svg";
import CartWidget from "../cart/CartWidget";

const Navbar = () => {
  return (
    <Navbarboots expand="lg" bg="dark" variant="dark" sticky="top">
      <Container>
        <LinkContainer to="/">
          <Navbarboots.Brand>
            <img
              alt="logo"
              src={logo}
              width="auto"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Gefalscht E-commerce
          </Navbarboots.Brand>
        </LinkContainer>
      </Container>
      <NavCategories />
      <Nav>
        <Container>
          <CartWidget />
        </Container>
      </Nav>
    </Navbarboots>
  );
};

export default Navbar;
