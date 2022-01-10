import React, { createContext } from "react";

const CartContext = createContext({
  items: [],
  addItem: (item, quantity) => {},
  removeItem: (itemId) => {},
  clear: () => {},
  isInCart: (itemId) => {},
});

export default CartContext;
