import React from "react";
import ItemList from "./ItemList";
import itemDataMock from "./ItemDataMock.json";

const ItemListContainer = (props) => {
  function onAdd(addedQuantity) {
    console.log(`added ${addedQuantity} items!`);
  }

  return <ItemList items={itemDataMock} />;
};

export default ItemListContainer;
