import React from "react";
import "./style.css";
import { Helmet } from "react-helmet-async";
const Payments = () => {
  return (
    <>
      <Helmet>
        <title>Payment</title>
        <meta name="description" content="Payments tab" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <div>Payments</div>;
    </>
  );
};

export default Payments;
