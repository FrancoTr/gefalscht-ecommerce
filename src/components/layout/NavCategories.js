import React from "react";
import { Container, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const NavCategories = () => {
  return (
    <Container>
      <Nav>
        <LinkContainer to="category/1">
          <Nav.Link>Men's Clothing</Nav.Link>
        </LinkContainer>
        <LinkContainer to="category/2">
          <Nav.Link>Women's Clothing</Nav.Link>
        </LinkContainer>
        <LinkContainer to="category/3">
          <Nav.Link>Jewelry</Nav.Link>
        </LinkContainer>
        <LinkContainer to="category/4">
          <Nav.Link>Electronics</Nav.Link>
        </LinkContainer>
      </Nav>
    </Container>
  );
};

export default NavCategories;
