import React from 'react';
import './App.css';
import CartHeader from './CartHeader';
import CartFooter from './CartFooter';
import CartItems from './CartItems';

function ShoppingCart() {
  
  let cartItemsList = [
    { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
    { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
    { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
  ];

  return (
      <div id="root">
      <CartHeader />
      <CartItems cartItems={cartItemsList} />
      <CartFooter year="2026" />
      </div>
  );
}

export default ShoppingCart;
