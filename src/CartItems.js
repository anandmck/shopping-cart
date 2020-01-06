import React from 'react';
import './App.css';
import CartItem from './CartItem';

function CartItems({cartItems}) {
  return (
  <div className="container">
  <h1>Cart Items</h1>
  <div className="list-group">
    <div className="list-group-item">
      <div className="row">
        <div className="col-md-8">Product</div>
        <div className="col-md-2">Price</div>
        <div className="col-md-2">Quantity</div>
      </div>
    </div>
     {cartItems.map( (element,i) => <CartItem key={i} name={element.product.name} price={element.product.priceInCents} quantity={element.quantity} /> )}
  </div>
  </div>
  );
}

export default CartItems;
