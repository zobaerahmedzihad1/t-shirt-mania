import { useState } from "react";
import Cart from "../Cart/Cart";
import useTShirts from "../hooks/useTShirts";
import TShirt from "../TShirt/TShirt";
import "./Home.css";

const Home = () => {
  const [tShirts, setTShirts] = useTShirts();
  const [cart, setCart] = useState([]);

  const handleAddToCart = (selectedItem) => {
    // condition can not add more than 4 items.
    if (cart.length >= 4) {
      alert("You can't add more than 4 items.");
      return selectedItem;
    }

    //  condition: can't add same item multiple time.
    const exists = cart.find((tShirt) => tShirt._id === selectedItem._id);
    if (!exists) {
      const newCart = [...cart, selectedItem];
      setCart(newCart);
    } else {
      alert("You can't add multiple time.");
    }
  };

  // remove items from cart.
  const handleRemoveFromCart = (selectedItem) => {
    const rest = cart.filter((tshirt) => tshirt._id !== selectedItem._id);
    setCart(rest);
  };

  // Refresh cart
  const handleRefreshCart = () => {
    setCart([]);
  };

  return (
    <div className="home-container">
      <div className="t-shirt-container">
        {tShirts.map((tshirt) => (
          <TShirt
            tshirt={tshirt}
            key={tshirt._id}
            handleAddToCart={handleAddToCart}
          ></TShirt>
        ))}
      </div>

      <div className="cart-container">
        <Cart
          cart={cart}
          handleRemoveFromCart={handleRemoveFromCart}
          handleRefreshCart={handleRefreshCart}
        ></Cart>
      </div>
    </div>
  );
};

export default Home;
