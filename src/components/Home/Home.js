import useTShirts from "../hooks/useTShirts";
import TShirt from "../TShirt/TShirt";
import "./Home.css";

const Home = () => {
  const [TShirts, setTShirts] = useTShirts();

  return (
    <div className="home-container">
      <div className="t-shirt-container">
        {TShirts.map((tshirt) => (
          <TShirt tshirt={tshirt} key={tshirt._id}></TShirt>
        ))}
      </div>

      <div className="cart-container">
        <h2>This is Cart</h2>
      </div>
    </div>
  );
};

export default Home;
