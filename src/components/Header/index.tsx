import React from "react";
import "./style.css";
import logo from "../../assets/png/Designer.png";

const Header = () => {
  return (
    <header className="headerContentsContainer">
      <img src={logo} alt="logo" />
      <h2>Dashify</h2>
    </header>
  );
};

export default Header;
