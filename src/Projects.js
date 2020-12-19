import React from "react";
import Proj from "./Proj";
import "./Projects.css";
import react from "./logo.svg";
import firebase from "./images/firebase.png";
import JS from "./images/JS.png";

function Projects() {
  return (
    <div className="projects">
      <div className="p-head">
        <h2>PROJECTS</h2>
        <img className="react" src={react} alt="react" />
        <img className="fb" src={JS} alt="JS" />
        <img className="fb" src={firebase} alt="firebase" />
      </div>
      <div className="conts">
        <Proj
          title="Netflix Trailers"
          src="https://netflix-api-454d5.web.app"
          gsrc="https://github.com/LEOANTONY2002/NetflixTrailers"
        />
        <Proj
          title="Amazon-clone"
          src="https://fir-a30d8.web.app"
          gsrc="https://github.com/LEOANTONY2002/amazon"
        />
        <Proj
          title="Intagram-clone"
          src="https://tiktok-clone-13354.web.app"
          gsrc="https://github.com/LEOANTONY2002/Insta-clone"
        />
        <Proj
          title="Spotify-clone"
          src="https://spotify-5e6e7.web.app"
          gsrc="https://github.com/LEOANTONY2002/Spotify-clone"
        />
        <Proj
          title="WhatsApp-clone"
          src="https://whatsapp-clone-78ad8.web.app"
          gsrc="https://github.com/LEOANTONY2002/WhatsApp-clone"
        />
        <Proj
          title="Portfolio"
          src="https://leoantony2002.web.app"
          gsrc="https://github.com/LEOANTONY2002/Portfolio"
        />
        <p className="continue">To be continued.....</p>
      </div>
    </div>
  );
}

export default Projects;
