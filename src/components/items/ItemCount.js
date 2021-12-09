import React, { useState } from "react";
import { InputGroup, Button, Badge } from "react-bootstrap";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [itemQuantity, setItemQuantity] = useState(initial);
  const [availableStock, setAvailableStock] = useState(stock);

  function onIncrease() {
    if (itemQuantity < availableStock) {
      setItemQuantity(itemQuantity + 1);
    }
  }

  function onDecrease() {
    if (itemQuantity > 0) {
      setItemQuantity(itemQuantity - 1);
    }
  }

  function onAddToCart() {
    if (itemQuantity) {
      onAdd(itemQuantity);
      setAvailableStock(availableStock - itemQuantity);
      setItemQuantity(0); //resets the counter
    }
  }

  return (
    <>
      <InputGroup>
        <Button onClick={onDecrease} variant="outline-secondary" className="fw-bold">
          -
        </Button>
        <Button onClick={onIncrease} variant="outline-secondary" className="fw-bold">
          +
        </Button>
        <Button onClick={onAddToCart} variant="dark">
          Add to Cart <Badge bg="secondary">{itemQuantity}</Badge>
        </Button>
      </InputGroup>
    </>
  );
};

export default ItemCount;
