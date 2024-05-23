import React from "react";
import "./style.css";
import { Helmet } from "react-helmet-async";

const Dashboard = () => {
  return (
    <>
      <Helmet>
        <title>Dashboard</title>
        <meta name="description" content="Explore dashboard" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <div>Dashboard</div>;
    </>
  );
};

export default Dashboard;
