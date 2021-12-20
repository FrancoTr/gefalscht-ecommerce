import React from "react";
import ItemCount from "./ItemCount";

import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

const ItemDetail = (props) => {
  console.log(props);
  return (
    <Card border="dark" style={{ width: "30rem" }}>
      <Card.Img variant="dark" src={props.product.image} />
      <Card.Body>
        <Card.Title className="fw-bold">{props.product.title}</Card.Title>
        <Card.Text>{props.product.description}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush fw-bold">
        <ListGroupItem>{`Price: $${props.product.price}`}</ListGroupItem>
        <ListGroupItem>{`Category: ${props.product.category}`}</ListGroupItem>
        <ListGroupItem>{`Rating: ${props.product.rating.rate}/5`}</ListGroupItem>
        <ListGroupItem>{`Stock: ${props.product.rating.count} Units`}</ListGroupItem>
      </ListGroup>
      <Card.Body>
        <ItemCount />
      </Card.Body>
    </Card>
  );
};

export default ItemDetail;
