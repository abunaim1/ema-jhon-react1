/* eslint-disable no-const-assign */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  //   const { cart } = props;
  console.log(cart);
  let total = 0;
  let shipping = 0;
  for (const p of cart) {
    total = total + p.price;
    shipping = shipping + p.shipping;
  }
  const tax = (total * 5) / 100;
  const grandTotal = total + tax + shipping;

  return (
    <div className='cart-container'>
        <h2>Order Summary</h2>
        <p>Selected Items: {cart.length}</p>
        <p>Total Price: ${total}</p>
        <p>Shipping: ${shipping}</p>
        <p>Tax: ${tax}</p>
        <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>
    </div>
  );
};

export default Cart;
