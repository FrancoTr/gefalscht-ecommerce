import React from "react";
import logo from "../../images/fakeicon.svg";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar as Navbarboots, Container } from "react-bootstrap";

const HomeLogo = () => {
  return (
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
  );
};

export default HomeLogo;
