import React from 'react';
import './App.css';

function CartItem({name, price, quantity}){
  return (
    <div className="list-group-item">
    <div className="row">
        <div className="col-md-8">{name}</div>
        <div className="col-md-2">${price/100}</div>
        <div className="col-md-2">{quantity}</div>
    </div>
    </div>
    );
}

export default CartItem;