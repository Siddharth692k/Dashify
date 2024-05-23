import React from "react";
import "./style.css";
import { Helmet } from "react-helmet-async";

const ProductsCategory = () => {
  return (
    <>
      <Helmet>
        <title>Products category</title>
        <meta name="description" content="Explore category of products" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <div>ProductsCategory</div>;
    </>
  );
};

export default ProductsCategory;
