import React from "react";
import "./TShirt.css";

const TShirt = ({ tshirt }) => {
  
  const { name, picture, price } = tshirt;
  return (
    <div>
      <div className="card">
           <div className="card-image">
                <img src={picture } alt="" />
           </div>
           <div className="card-text">
                <h3>Name : {name} </h3>
                <h4>Price : ${price} </h4>
                <button>Add to Cart</button>
           </div>
      </div>
    </div>
  );
};

export default TShirt;
