/* eslint-disable no-const-assign */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  //   const { cart } = props;

  let total = 0;
  let shipping = 0;
  let quantity = 0;
  for (const p of cart) {
    p.quantity = p.quantity || 1;
    total = total + p.price * p.quantity;
    shipping = shipping + p.shipping * p.quantity;
    quantity = quantity + p.quantity;
  }
  const tax = (total * 5) / 100;
  const grandTotal = total + tax + shipping;

  return (
    <div className="cart-container">
      <h2>Order Summary</h2>
      <p>Selected Items: {quantity}</p>
      <p>Total Price: ${total}</p>
      <p>Shipping: ${shipping}</p>
      <p>Tax: ${tax}</p>
      <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>
    </div>
  );
};

export default Cart;
