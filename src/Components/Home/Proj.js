import React from "react";
import "./Projects.css";
import web from "../images/web.png";
import gh from "../images/gh.png";

function Proj({ title, src, gsrc, mongo, firebase, pwa, js, node, react }) {
  return (
    <div className="proj">
      <div className="frame">
        <iframe
          className="iframe"
          src={src}
          title={title}
          allowFullScreen
        ></iframe>
        <div className="web">
          <a href={src} target="_blank" rel="noreferrer">
            <img src={web} alt="web" />
          </a>
          <h3>{title}</h3>
          <a href={gsrc} target="_blank" rel="noreferrer">
            <img src={gh} alt="github" />
          </a>
        </div>
      </div>
      <div className="techs">
        <img src={react} alt="react" />
        {node && <img src={node} alt="node" />}
        {mongo && <img src={mongo} alt="mongodb" />}
        <img src={firebase} alt="firebase" />
        <img src={js} alt="js" />
        <img src={pwa} alt="pwa" />
      </div>
    </div>
  );
}

export default Proj;
