import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ItemListContainer = (props) => {
  const [itemsData, setItemsData] = useState([]);
  const [error, setError] = useState(null);

  const { id } = useParams();

  let url = "https://fakestoreapi.com/products";
  if (id) {
    url = `${url}/category/${id}`;
  }

  async function fetchData(url) {
    setError(null);
    try {
      const response = await fetch(url);
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
    fetchData(url);
  }, [url]);

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
