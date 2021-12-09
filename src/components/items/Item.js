import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

const Item = ({ id, title, description, price, pictureUrl }) => {
  return (
    <Card border="dark" bg="dark" text="light">
      <Card.Img variant="top" src={pictureUrl} />
      <Card.Body>
        <Card.Title as="h1">{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem variant="dark">SKU: {id}</ListGroupItem>
        <ListGroupItem variant="dark">Price: {price}</ListGroupItem>
      </ListGroup>
    </Card>
  );
};

export default Item;
