import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import LA from "./images/LA.jpg";

function Header() {
  return (
    <div className="header">
      <div className="img">
        <img src={LA} alt="LA" />
      </div>
      <div className="navs">
        <Link to="/">
          <p className="p">HOME</p>
        </Link>
        <Link to="/resume">
          <p className="p">RESUME</p>
        </Link>
        <Link to="/">
          <p className="p">CONTACT</p>
        </Link>
      </div>
    </div>
  );
}

export default Header;
