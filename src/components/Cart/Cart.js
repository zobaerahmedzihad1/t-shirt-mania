import React from "react";
import "./Cart.css";

const Cart = ({ cart, handleRemoveFromCart }) => {
  // console.log(cart);

  return (
    <div>
      <h1> Selected Items : {cart.length}</h1>
      {cart.map((tShirt) => (
        <p>
          {" "}
          {tShirt.name}
          <button onClick={()=> handleRemoveFromCart(tShirt)}>remove</button>
        </p>
      ))}
    </div>
  );
};

export default Cart;
