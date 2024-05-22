import "./App.scss";
import { content } from "./content";
import BulbOn from "./assets/images/BulbOn.png";
import BulbOff from "./assets/images/BulbOff.png";
import Figma from "./assets/images/Figma.png";
import Web from "./assets/images/Web.png";
import PlayStore from "./assets/images/PlayStore.png";
import Github2 from "./assets/images/Github2.png";
import FigmaL from "./assets/images/FigmaL.png";
import WebL from "./assets/images/WebL.png";
import PlayStoreL from "./assets/images/PlayStoreL.png";
import Github2L from "./assets/images/Github2L.png";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "./redux/appSlice";
import useOnScreen from "./hooks/useOnScreen";

function App() {
  const { darkTheme } = useSelector((state) => state?.app);
  const dispatch = useDispatch();
  const profileref = useRef();
  const profileVisible = useOnScreen(profileref);
  const [pageIndex, setPageIndex] = useState(0);

  useEffect(() => {
    setPageIndex(profileVisible ? 0 : 1);
  }, [profileVisible]);

  return (
    <div className={darkTheme ? "App" : "App AppLight"}>
      <img
        src={darkTheme ? BulbOff : BulbOn}
        onClick={() => dispatch(toggleTheme())}
        alt=""
      />
      <nav>
        {content?.nav?.map((nav, index) => (
          <a
            onClick={() => setPageIndex(index)}
            className={index === pageIndex && "active"}
            href={nav?.link}
            key={index}
          >
            <img src={nav?.icon} alt="" />
          </a>
        ))}
      </nav>
      <main id="profile" ref={profileref}>
        <h1>
          LEO <span>ANTONY</span>
        </h1>
        <p>Software Developer</p>
        <div>
          {content?.contact?.map((contact, index) => (
            <a href={contact?.link} target="_blank" key={index}>
              <img src={contact?.icon} alt="" />
            </a>
          ))}
        </div>
      </main>
      <section id="projects" className="projects">
        <div>
          <div></div>
          <h4>
            DESIGN <p>TO </p>
            <span>DEPLOY</span>
          </h4>
        </div>
        {content?.projects?.map((project, index) => (
          <div key={index} className="project">
            <main>
              <div></div>
              <img src={project?.image} alt="" />
              <div></div>
            </main>
            <div>
              <h1>{project?.title}</h1>
              <span></span>
              <div className="skills">
                {project?.skills?.map((skill, index) => (
                  <img key={index} src={skill} alt="" />
                ))}
              </div>
              <div className="btns">
                <a
                  href={project?.web}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={
                      darkTheme && project?.app
                        ? PlayStore
                        : !darkTheme && project?.app
                        ? PlayStoreL
                        : darkTheme && !project?.app
                        ? Web
                        : WebL
                    }
                    alt=""
                  />
                </a>
                <a
                  href={project?.figma}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={darkTheme ? Figma : FigmaL} alt="" />
                </a>
                <a
                  href={project?.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={darkTheme ? Github2 : Github2L} alt="" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default App;
