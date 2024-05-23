import React from "react";
import "./style.css";
import { Helmet } from "react-helmet-async";
const Products = () => {
  return (
    <>
      <Helmet>
        <title>Products</title>
        <meta name="description" content="Explore Products" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <div>Products</div>;
    </>
  );
};

export default Products;
