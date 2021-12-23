import React from "react";
import { Card, Button } from "react-bootstrap";

const Item = ({ title, description, image }) => {
  return (
    <Card border="dark" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title className="fw-bold text-center">{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <div className="text-center">
          <Button size="lg" variant="dark">
            See Details
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Item;
