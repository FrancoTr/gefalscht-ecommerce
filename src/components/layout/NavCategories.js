import React from "react";
import { Container, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const NavCategories = () => {
  return (
    <Container>
      <Nav>
        <LinkContainer to="/category/electronics">
          <Nav.Link>Electronics</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/category/jewelry">
          <Nav.Link>Jewelry</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/category/men's clothing">
          <Nav.Link>Men's Clothing</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/category/women's clothing">
          <Nav.Link>Women's Clothing</Nav.Link>
        </LinkContainer>
      </Nav>
    </Container>
  );
};

export default NavCategories;
