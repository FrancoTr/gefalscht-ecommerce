import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

const Item = ({ id, title, description, price, pictureUrl }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={pictureUrl} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>SKU: {id}</ListGroupItem>
        <ListGroupItem>Price: ${price}</ListGroupItem>
      </ListGroup>
    </Card>
  );
};

export default Item;
