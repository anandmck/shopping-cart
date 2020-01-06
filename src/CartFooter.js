import React from 'react';
import './App.css';

function CartFooter({year}) {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">&copy; {year} </a>
      </nav>
    );
  }

export default CartFooter;

  