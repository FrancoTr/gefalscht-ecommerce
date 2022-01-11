import React, { useContext, createContext, useState } from "react";

const cartContext = createContext();
export const { Provider } = cartContext;

export const useCartContext = () => {
  return useContext(cartContext);
};

const CartProvider = ({ children }) => {
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity) => {
    if (isInCart(product.id)) {
      let productInCart = isInCart(product.id);
      productInCart.quantity += quantity;
      setCart([...cart]);
    } else {
      setCart([...cart, { product, quantity }]);
    }
    setTotalQuantity(totalQuantity + quantity);
  };

  const removeFromCart = (id) => {
    const product = (id) => cart.find((product) => product.id === id);
    setTotalQuantity(totalQuantity - product.quantity);

    const removeProduct = cart.filter((product) => product.id !== id);
    setCart(removeProduct);
  };

  const clearCart = () => {
    setTotalQuantity(0);
    setCart([]);
  };

  const isInCart = (id) => {
    return cart.find((product) => product.id === id);
  };

  return (
    <Provider
      value={{
        totalQuantity,
        cart,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </Provider>
  );
};

export default CartProvider;
