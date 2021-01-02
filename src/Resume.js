import React from "react";
import RESUME from "./images/RESUME.pdf";
import res from "./images/resume.jpg";

function Resume() {
  return (
    <div className="resume">
      <h1>RESUME</h1>
      <img src={res} alt="RESUME" />

      <a href={RESUME} download="resume.pdf">
        <button>DOWNLOAD</button>
      </a>
    </div>
  );
}

export default Resume;
