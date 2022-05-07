import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import menu from "../images/menu.png";
import home from "../images/home.png";
import projs from "../images/projs.png";
import res from "../images/resic.png";
import apps from "../images/apps.png";

function Header() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);

  return (
    <div className="header">
      <img src={menu} className={show && "nav_black"} alt="menu" />
      <div className="navs">
        <Link to="/">
          <div className="n-img">
            <img src={home} alt="home" />
          </div>
          <span>HOME</span>
        </Link>
        <Link to="/projects">
          <div className="n-img">
            <img src={projs} alt="resume" />
          </div>
          <span>PROJECTS</span>
        </Link>
        <Link to="/apps">
          <div className="n-img">
            <img src={apps} alt="resume" />
          </div>
          <span>APPS</span>
        </Link>
      </div>
    </div>
  );
}

export default Header;
