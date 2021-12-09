import React from "react";
import ItemList from "./ItemList";

const ItemListContainer = (props) => {
  function onAdd(addedQuantity) {
    console.log(`added ${addedQuantity} items!`);
  }

  return <ItemList />;
};

export default ItemListContainer;
