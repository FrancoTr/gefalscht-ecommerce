import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { Spinner } from "react-bootstrap";

const ItemListContainer = (props) => {
  const [itemsData, setItemsData] = useState([]);
  const [error, setError] = useState(null);

  async function fetchData() {
    setError(null);
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) {
        throw new Error("Bad request");
      }
      const data = await response.json();
      setItemsData(data);
    } catch (error) {
      setError(error.message);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  //let content = <h1 className="text-center">Loading...</h1>;
  let content = (
    <div className="d-flex justify-content-center my-4">
      <Spinner animation="border" size="lg" variant="dark" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );

  if (itemsData.length > 0) {
    content = <ItemList items={itemsData} />;
  }

  if (error) {
    content = <p className="text-center">{error}</p>;
  }

  return <section>{content}</section>;
};

export default ItemListContainer;
