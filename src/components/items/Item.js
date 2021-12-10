import React from "react";
import ItemCount from "./ItemCount";
import { Card, ListGroup } from "react-bootstrap";

const Item = ({ id, title, description, price, pictureUrl }) => {
  return (
    <Card border="dark" bg="dark" text="light" style={{ height: "auto" }}>
      <Card.Img variant="top" src={pictureUrl} style={{ maxHeight: "50%" }} />
      <Card.Body>
        <Card.Title as="h1">{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item variant="dark" className="fw-bold">
          SKU: {id}
        </ListGroup.Item>
        <ListGroup.Item variant="dark" className="fw-bold">
          Price: {price}
        </ListGroup.Item>
        <ListGroup.Item variant="secondary">
          <ItemCount />
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
};

export default Item;
