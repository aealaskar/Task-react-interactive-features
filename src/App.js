import { useState } from "react";
import Home from "./components/Home";
// Components
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
//styling
import "./App.css";

function App() {
  const [detail, setDetail] = useState({
    id: 1,
    name: "Chocolate Chip Cookie",
    price: 10,
    image:
      "https://joyfoodsunshine.com/wp-content/uploads/2016/01/best-chocolate-chip-cookies-recipe-ever-no-chilling-1.jpg",
    description: "its 10KD don't buy it",
  });

  const [theme, setTheme] = useState("lighttheme");
  return (
    <div className={theme}>
      <Home setTheme={setTheme} theme={theme} />
      <ProductList setDetail={setDetail} />
      <ProductDetails detail={detail} />
    </div>
  );
}

export default App;
