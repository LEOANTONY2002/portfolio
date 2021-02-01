import React from "react";
import "./Projects.css";
import web from "../images/web.png";
import gh from "../images/gh.png";

function Proj({ title, src, gsrc }) {
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  return (
    <div className="proj">
      <iframe
        src={src}
        title={title}
        width="300px"
        height="180px"
        allowFullScreen
      ></iframe>
      <div className="p-info">
        <div className="p-head">
          <img src="" alt="" />
          <h3>{title}</h3>
        </div>
        <div className="p-desc">
          <div className="web">
            <img src={web} alt="" />
            <p>
              <a href={src} target="_blank">
                {truncate(src, 40)}
              </a>
            </p>
          </div>
          <div className="gh">
            <img src={gh} alt="" />
            <p>
              <a href={gsrc} target="_blank">
                {truncate(gsrc, 40)}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Proj;
