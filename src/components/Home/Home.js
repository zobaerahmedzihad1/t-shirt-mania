import { useState } from "react";
import Cart from "../Cart/Cart";
import useTShirts from "../hooks/useTShirts";
import TShirt from "../TShirt/TShirt";
import "./Home.css";

const Home = () => {
  const [TShirts, setTShirts] = useTShirts();
  const [cart, setCart] = useState([]);

  const handleAddToCart = (selectedItem) => {
    const newCart = [...cart, selectedItem];
    setCart(newCart);
  };

  

  return (
    <div className="home-container">
      <div className="t-shirt-container">
        {TShirts.map((tshirt) => (
          <TShirt
            tshirt={tshirt}
            key={tshirt._id}
            handleAddToCart={handleAddToCart}
          ></TShirt>
        ))}
      </div>

      <div className="cart-container">
        <Cart cart={cart} ></Cart>
      </div>
    </div>
  );
};

export default Home;
