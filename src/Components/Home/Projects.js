import React from "react";
import Proj from "./Proj";
import "./Projects.css";
import react from "./logo.svg";
import reactjs from "../images/react.png";
import firebase from "../images/firebase.png";
import JS from "../images/JS.png";
import pwa from "../images/pwaw.png";
import node from "../images/nodejs.png";
import mongo from "../images/mongoDB.png";

function Projects() {
  return (
    <div className="projects">
      <div className="p-head">
        <p></p>
        <h2>PROJECTS</h2>
        <img className="react" src={react} alt="react" />
        <img className="fb" src={node} alt="JS" />
        <img className="fb" src={JS} alt="JS" />
        <img className="fb" src={mongo} alt="JS" />
        <img className="fb" src={firebase} alt="firebase" />
        <img className="fb" src={pwa} alt="pwa" />
      </div>
      <div className="conts">
      <Proj
          title="E-Commerce"
          src="https://leoecomm.web.app"
          gsrc="https://github.com/LEOANTONY2002/amazon"
          node={node}
          mongo={mongo}
          react={reactjs}
          pwa={pwa}
          js={JS}
          firebase={firebase}
        />
        <Proj
          title="Netflix Trailers"
          src="https://netflixtrailers.firebaseapp.com"
          gsrc="https://github.com/LEOANTONY2002/NetflixTrailers"
          react={reactjs}
          pwa={pwa}
          js={JS}
          firebase={firebase}
        />
        <Proj
          title="Chat App"
          src="https://leochatapp.web.app"
          gsrc="https://github.com/LEOANTONY2002/amazon"
          react={reactjs}
          pwa={pwa}
          js={JS}
          firebase={firebase}
        />
      </div>
    </div>
  );
}

export default Projects;
