import React from "react";
import play from "../images/gps.png";
import ama from "../images/amazon.png";
import "./Apps.css";

function SingleApp({ title, Image, small, glp, aap }) {
  return (
    <div className="proj s-app">
      <div className="a-img">
        <img src={Image} alt="" />
      </div>
      <p className="s-line"></p>
      <div className="a-info">
        {small ? <h4>{title}</h4> : <h3>{title}</h3>}
        <div className="img-row">
          {aap ? (
            <div>
              <a href={glp} target="_blank" rel="noreferrer">
                <img src={play} alt={title} />
              </a>
              <a href={aap} target="_blank" rel="noreferrer">
                <img src={ama} alt={title} />
              </a>
            </div>
          ) : (
            <a href={glp} target="_blank" rel="noreferrer">
              <img src={play} alt={title} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default SingleApp;
