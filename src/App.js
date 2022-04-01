import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import OrderReview from "./components/OrderReview/OrderReview";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path = '/' element={<Home/>}></Route>
        <Route path="/home" element={<Home/>} ></Route>
        <Route path="/orderreview" element={<OrderReview/>} ></Route>
        <Route path="*" element={<NotFound/>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
