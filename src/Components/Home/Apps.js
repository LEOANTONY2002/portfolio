import React from "react";
import SingleApp from "./SingleApp";
import DT from "../images/DT.jpeg";
import android from "../images/android.png";
import LAred from "../images/LAred.jpeg";
import medry from "../images/medry.png";
import med from "../images/med.png";
import react from "../images/react.png";
import play from "../images/play.png";
import aap from "../images/aap.jpg";

function Apps() {
  return (
    <>
      <div className="apps">
        <div className="p-head">
          <p></p>
          <h2>APPS</h2>
          <img style={{ margin: "0 10px" }} src={react} alt="react" />
          <img src={android} alt="firebase" />
        </div>
        <div className="conts">
          <SingleApp
            small={true}
            title="Medry"
            Image={medry}
            glp="https://play.google.com/store/apps/details?id=com.medry"
            aap="https://www.amazon.com/gp/product/B097BFV5NK"
          />
          <SingleApp
            title="NetFlexTrailers"
            Image={LAred}
            glp="https://play.google.com/store/apps/details?id=com.leoantony.trailers"
            aap=""
          />
          <SingleApp
            small={true}
            title="Dictionary & Thesaurus"
            Image={DT}
            glp="https://play.google.com/store/apps/details?id=com.leo.dictionaryandthesaurus"
            aap="https://www.amazon.com/LEO-ANTONY-Dictionary-Thesaurus/dp/B08QN44LB4/ref=sr_1_2?dchild=1&qid=1608307404&refinements=p_4%3ALEO+ANTONY&s=mobile-apps&search-type=ss&sr=1-2"
          />
        </div>
      </div>
      <div className="f-app">
        <div className="p-head">
          <p></p>
          <h2>FEATURED APP</h2>
        </div>
        <div className="fa-det">
          <div className="fa-banner">
            <div className="fg"></div>
            <div className="grad">
              <p>
                ME<span>D</span>RY
              </p>
              <span>The Medical Dictionary</span>
            </div>
          </div>
          <div className="fa-img">
            <img src={med} alt="medry" />
          </div>
          <div className="fa-ss"></div>
          <div className="aps">
            <a
              href="https://play.google.com/store/apps/details?id=com.medry"
              target="_blank"
              rel="noreferrer"
            >
              <img src={play} alt="google" />
            </a>

            <a
              href="https://www.amazon.com/gp/product/B097BFV5NK"
              target="_blank"
              rel="noreferrer"
            >
              <img src={aap} alt="amazon" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Apps;
