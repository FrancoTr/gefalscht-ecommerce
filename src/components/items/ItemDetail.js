import React from "react";
import ItemCount from "./ItemCount";

import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

const ItemDetail = ({ product }) => {
  return (
    <Card border="dark" style={{ width: "30rem" }}>
      <Card.Img variant="dark" src={product.image} />
      <Card.Body>
        <Card.Title className="fw-bold">{product.title}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush fw-bold">
        <ListGroupItem>{`Price: $${product.price}`}</ListGroupItem>
        <ListGroupItem>{`Category: ${product.category}`}</ListGroupItem>
      </ListGroup>
      <Card.Body>
        <ItemCount />
      </Card.Body>
    </Card>
  );
};

export default ItemDetail;
