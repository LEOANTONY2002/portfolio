import React from "react";
import "./Bio.css";
import LEO from "./images/leo.jpg";
import ph from "./images/ph.png";
import inl from "./images/in.png";
import gm from "./images/gm.png";
import gh from "./images/gh.png";

function Bio() {
  return (
    <div className="bio">
      <div className="b-img">
        <img src={LEO} alt="LEO" />
      </div>
      <div className="info">
        <h1>LEO ANTONY</h1>
        <h4>"Learning has no limit"</h4>
        <hr />
        <p>
          I'm a self-taught web developer craving to learn new things
          everyday...
        </p>
        <div className="details">
          <div className="det">
            <img src={gh} alt="" />
            <a href="https://www.github.com/LEOANTONY2002" target="_blank">
              <p>github.com/LEOANTONY2002</p>
            </a>
          </div>
          <div className="det">
            <img src={inl} alt="" />
            <a href="https://www.linkedin.com/in/leo-antony" target="_blank">
              <p>linkedin.com/in/leo-antony</p>
            </a>
          </div>

          <div className="det">
            <img src={gm} alt="" />
            <a href="https://www.leoantony20025@gmail.com" target="_blank">
              <p>leoantony20025@gmail.com</p>
            </a>
          </div>
          <div className="det">
            <img src={ph} alt="" />
            <p>9791971856</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bio;

//https://github.com/LEOANTONY2002?tab=repositories
