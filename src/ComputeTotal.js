import React from 'react';
import './App.css';

function ComputeTotal({cartItems}) {
 
    return (
        <div className="row">
        <div className="col-md-6"></div>
        Total : $ {cartItems.map((element) => (element.product.priceInCents/100 * element.quantity)).reduce((Total,eachValue)=>(Total+eachValue))}
        </div>
       
        
  );
}

export default ComputeTotal;