import React from "react";
import NavCategories from "./NavCategories";
import HomeLogo from "./HomeLogo";
import { Navbar as Navbarboots, Container, Nav } from "react-bootstrap";
import CartWidget from "../cart/CartWidget";

const Navbar = () => {
  return (
    <Navbarboots expand="lg" bg="dark" variant="dark" sticky="top">
      <HomeLogo />
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
