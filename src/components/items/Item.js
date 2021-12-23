import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Card, Button } from "react-bootstrap";

const Item = ({ id, title, image }) => {
  return (
    <Card border="dark" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title className="fw-bold text-center">{title}</Card.Title>
        <LinkContainer to={`/item/${id}`}>
          <div className="text-center">
            <Button size="lg" variant="dark">
              See Details
            </Button>
          </div>
        </LinkContainer>
      </Card.Body>
    </Card>
  );
};

export default Item;
