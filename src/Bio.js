import React from "react";
import "./Bio.css";
import LEO from "./images/leo.jpg";

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
      </div>
    </div>
  );
}

export default Bio;
