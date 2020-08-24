import React, { useState } from "react";
import "../Shop/Shop.css";
import Products from "../Products/Products";
import fakeData from "../../fakeData";

const Shop = () => {
  const firstTen = fakeData.slice(0, 10);
  const [products, setProducts] = useState(firstTen);

  return (
    <div className="container">
      <div className="shop">
        {products.map((product) => (
          <Products product={product}></Products>
        ))}
      </div>
      <div className="cart"></div>
    </div>
  );
};

export default Shop;
