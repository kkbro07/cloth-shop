// Cart.js
import CartItems from '../Components/CartItems/CartItems'
import React from 'react';
import useDocumentTitle from './useDocumentTitle'; // Import the custom hook

const Cart = () => {
  useDocumentTitle("Shopping Cart - Overlays Clothing"); // Set the page title

  return (
    <div>
      <CartItems/>
    </div>
  );
};

export default Cart;
