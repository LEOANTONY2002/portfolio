import React from "react";
import "./Bio.css";
import LEO from "../images/leo.jpg";
import ph from "../images/ph.png";
import inl from "../images/in.png";
import gm from "../images/gm.png";
import gh from "../images/gh.png";

function Bio() {
  return (
    <div className="bio">
      <div className="bg"></div>
      <div className="bg-img-wrap">
        <div className="b-img">
          <img src={LEO} alt="LEO" />
        </div>
      </div>
      <div className="info">
        <h1>
          <span>LEO</span>ANTONY
        </h1>
        <h4>"Learning has no limits"</h4>
        <li className="line"></li>
        <p>
          I'm a self-taught developer passionate about programming, an avid
          learner of new technologies to create innovative solution with an
          artistic touch.
        </p>
        <div className="details">
          <div className="det">
            <a
              href="https://www.github.com/LEOANTONY2002"
              target="_blank"
              rel="noreferrer"
            >
              <img src={gh} alt="" />
            </a>
          </div>
          <div className="det">
            <a
              href="https://www.linkedin.com/in/leo-antony"
              target="_blank"
              rel="noreferrer"
            >
              <img src={inl} alt="" />
            </a>
          </div>

          <div className="det">
            <a href="mailto:leoantony20025@gmail" rel="noreferrer">
              <img src={gm} alt="" />
            </a>
          </div>
          <div className="det">
            <a href="tel:9791971856" rel="noreferrer">
              <img src={ph} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bio;

//https://github.com/LEOANTONY2002?tab=repositories
