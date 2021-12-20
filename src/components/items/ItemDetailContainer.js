import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = (props) => {
  const [itemData, setItemData] = useState([]);

  const getItem = async () => {
    const response = await fetch("https://fakestoreapi.com/products/4");
    const data = await response.json();
    setItemData(data);
  };

  useEffect(() => {
    getItem();
  }, []);
  console.log(itemData);
  return (
    <Container>
      <ItemDetail product={itemData} />
    </Container>
  );
};

export default ItemDetailContainer;
