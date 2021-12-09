import React from "react";
import ItemCount from "../layout/ItemCount";

const ItemListContainer = (props) => {
  function onAdd(addedQuantity) {
    console.log(`added ${addedQuantity} items!`);
  }

  return (
    <div>
      <h1>Hello {props.name}!</h1>
      <ItemCount stock={5} initial={1} onAdd={onAdd} />
    </div>
  );
};

export default ItemListContainer;
