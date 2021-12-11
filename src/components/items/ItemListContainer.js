import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import itemDataMock from "./ItemDataMock.json";

const promiseMock = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(itemDataMock);
    }, 3000);
  });
};

const ItemListContainer = (props) => {
  const [itemsData, setItemsData] = useState([]);

  useEffect(() => {
    promiseMock().then((data) => {
      setItemsData(data);
    });
  }, []);

  /*function onAdd(addedQuantity) {
    console.log(`added ${addedQuantity} items!`);
  }*/

  return <ItemList items={itemsData} />;
};

export default ItemListContainer;
