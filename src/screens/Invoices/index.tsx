import React from "react";
import "./style.css";
import { Helmet } from "react-helmet-async";

const Invoices = () => {
  return (
    <>
      <Helmet>
        <title>Invoice</title>
        <meta name="description" content="Invoice tab" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <div>Invoices</div>;
    </>
  );
};

export default Invoices;
