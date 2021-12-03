import React from "react";
import cartIcon from "../../images/shoppingcart.svg";
import { Badge as CartIconBackground } from "react-bootstrap";

const CartWidget = () => {
  return (
    <CartIconBackground pill bg="light">
      <img
        alt="cart"
        src={cartIcon}
        width="auto"
        height="30"
        className="d-inline-block align-top"
      />
    </CartIconBackground>
  );
};

export default CartWidget;
