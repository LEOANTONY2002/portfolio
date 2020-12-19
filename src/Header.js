import React from "react";
import "./Header.css";
import LA from "./images/LA.jpg";

function Header() {
  return (
    <div className="header">
      <div className="img">
        <img src={LA} alt="LA" />
      </div>
      <div className="navs">
        <p>HOME</p>
        <p>RESUME</p>
        <p>CONTACT</p>
      </div>
    </div>
  );
}

export default Header;
