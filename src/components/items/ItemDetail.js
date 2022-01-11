import React, { useState, useContext } from "react";
import { useCartContext } from "../../store/CartContext";
import ItemCount from "./ItemCount";
import { LinkContainer } from "react-router-bootstrap";
import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";

const ItemDetail = ({ product }) => {
  const [addedQuantity, setAddedQuantity] = useState(0);
  const [showEndTransactionButton, setShowEndTransactionButton] = useState(false);
  const { addToCart } = useCartContext();

  const onAdd = (itemQuantity) => {
    setAddedQuantity(addedQuantity);
    setShowEndTransactionButton(true);
    addToCart(product, addedQuantity);
  };
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
        {showEndTransactionButton ? (
          <Card.Body>
            <LinkContainer to="/cart">
              <Button variant="dark">End Transaction</Button>
            </LinkContainer>
          </Card.Body>
        ) : (
          <ItemCount onAdd={onAdd} />
        )}
      </Card.Body>
    </Card>
  );
};

export default ItemDetail;
