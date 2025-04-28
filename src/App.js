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
import { Helmet } from "react-helmet";

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
      <Helmet>
        <title>Leo Antony - Portfolio</title>
        <meta name="description" content="Portfolio of Leo Antony, a software developer specializing in design to deployment." />
        <meta name="keywords" content="Leo Antony, Portfolio, Software Developer, Web Development, Projects" />
        <meta name="author" content="Leo Antony" />
        <meta property="og:title" content="Leo Antony - Portfolio" />
        <meta property="og:description" content="Explore the portfolio of Leo Antony, showcasing projects and skills in software development." />
        <meta property="og:image" content="path/to/preview-image.png" />
        <meta property="og:url" content="https://your-portfolio-url.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Leo Antony - Portfolio" />
        <meta name="twitter:description" content="Portfolio of Leo Antony, a software developer specializing in design to deployment." />
        <meta name="twitter:image" content="path/to/preview-image.png" />
      </Helmet>
      <img
        src={darkTheme ? BulbOff : BulbOn}
        onClick={() => dispatch(toggleTheme())}
        alt="Toggle Theme"
      />
      <nav>
        {content?.nav?.map((nav, index) => (
          <a
            onClick={() => setPageIndex(index)}
            className={index === pageIndex && "active"}
            href={nav?.link}
            key={index}
          >
            <img src={nav?.icon} alt={nav?.title || "Navigation Icon"} />
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
            <a href={contact?.link} target="_blank" key={index} rel="noopener noreferrer">
              <img src={contact?.icon} alt={contact?.name || "Contact Icon"} />
            </a>
          ))}
        </div>
      </main>
      <section id="projects" className="projects">
        <div>
          <div></div>
          <h1>
            DESIGN <p>TO </p>
            <span>DEPLOY</span>
          </h1>
        </div>
        {content?.projects?.map((project, index) => (
          <div key={index} className="project">
            <main>
              <div></div>
              <img src={project?.image} alt={project?.title || "Project Image"} />
              <div></div>
            </main>
            <div>
              <h1>{project?.title}</h1>
              <span></span>
              <div className="skills">
                {project?.skills?.map((skill, index) => (
                  <img key={index} src={skill} alt={skill?.name || "Skill Icon"} />
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
                    alt="Web/App Link"
                  />
                </a>
                <a
                  href={project?.figma}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={darkTheme ? Figma : FigmaL} alt="Figma Link" />
                </a>
                {project?.github && <a
                  href={project?.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={darkTheme ? Github2 : Github2L} alt="GitHub Link" />
                </a>}
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default App;
