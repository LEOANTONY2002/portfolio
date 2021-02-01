import React from "react";
import play from "../images/play.png";
import ama from "../images/aap.png";
import "./Apps.css";

function SingleApp({ title, Image, small, glp, aap }) {
  return (
    <div className="proj s-app">
      <div className="a-img">
        <img src={Image} alt="" />
      </div>
      <div className="a-info">
        {small ? <h5>{title}</h5> : <h3>{title}</h3>}
        <div className="img-row">
          {aap ? (
            <div>
              <a href={glp} target="_blank">
                <img src={play} alt={title} />
              </a>
              <a href={aap} target="_blank">
                <img src={ama} alt={title} />
              </a>
            </div>
          ) : (
            <a href={glp} target="_blank">
              <img src={play} alt={title} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default SingleApp;
