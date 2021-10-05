// Components
import { useState } from "react";
import ProductItem from "./ProductItem";
import SearchBar from "./SearchBar";
import details from "./ProductDetails";
// Data
import products from "../products";
const ProductList = (props) => {
  const [query, setQuery] = useState("");

  const productList = products
    .filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((product) => (
      <ProductItem
        setDetail={props.setDetail}
        product={product}
        key={product.id}
      />
    ));

  return (
    <>
      <SearchBar setQuery={setQuery} />
      <div className="listWrapper">{productList}</div>
    </>
  );
};

export default ProductList;
