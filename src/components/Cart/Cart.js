import React from "react";
import "./Cart.css";

const Cart = ({ cart, handleRemove }) => {
  // console.log(cart);

  return (
    <div>
      <h1> Selected Items : {cart.length}</h1>
      {cart.map((tShirt) => (
        <h3>
          {tShirt.name}
          <button> remove</button>
        </h3>
      ))}
    </div>
  );
};

export default Cart;
