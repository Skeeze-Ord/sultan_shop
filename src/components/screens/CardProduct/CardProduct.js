import React from "react";

const CardProduct = ({ product }) => {
  return (
    <div>
      {Object.keys(product).map((key) => (
        <div key={product[key].id}>{product[key]}</div>
      ))}
    </div>
  );
};

export default CardProduct;
