import React from "react";
import SingleApp from "./SingleApp";
import DT from "../images/DT.jpeg";
import android from "../images/android.png";
import LAred from "../images/LAred.jpeg";

function Apps() {
  return (
    <div className="apps">
      <div className="p-head">
        <h2>APPS</h2>
        <img className="fb" src={android} alt="firebase" />
      </div>
      <div className="conts">
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
        <p className="continue">To be continued.....</p>
      </div>
    </div>
  );
}

export default Apps;
