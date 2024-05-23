import React from "react";
import "./style.css";
import { Helmet } from "react-helmet-async";

const Settings = () => {
  return (
    <>
      <Helmet>
        <title>Settings</title>
        <meta name="description" content="settings tab" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <div>Settings</div>;
    </>
  );
};

export default Settings;
