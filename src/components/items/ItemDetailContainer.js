import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = (props) => {
  const [itemData, setItemData] = useState([]);

  const { id } = useParams();

  const getItem = async () => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await response.json();
    setItemData(data);
  };

  useEffect(() => {
    getItem();
  }, [id]);

  return (
    <Container>
      <ItemDetail product={itemData} />
    </Container>
  );
};

export default ItemDetailContainer;
