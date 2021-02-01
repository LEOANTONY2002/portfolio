import React from "react";
import RESUME from "../images/resume.pdf";
import res from "../images/resume.jpg";
import "./Resume.css";

function Resume() {
  return (
    <div className="resume">
      <div className="r-left">
        <div className="r-info">
          <h1>RESUME</h1>
          <a href={RESUME} download="resume.pdf">
            <button>DOWNLOAD</button>
          </a>
        </div>
      </div>

      <div className="r-right">
        <img src={res} alt="RESUME" />
      </div>
    </div>
  );
}

export default Resume;
