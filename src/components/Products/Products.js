import React from "react";

const Products = (props) => {
  const { name, key, img } = props.product;
  return (
    <div>
      <img src={img} alt="" />
      <h1>{name}</h1>
      <h1></h1>
    </div>
  );
};

export default Products;
