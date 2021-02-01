import "./App.css";
import Header from "./Components/Home/Header";
import Projects from "./Components/Home/Projects";
import Bio from "./Components/Home/Bio";
import Apps from "./Components/Home/Apps";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Resume from "./Components/Resume/Resume";
import Splash from "./Components/Home/Splash";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/resume">
            <Header />
            <Resume />
          </Route>
          <Route path="/">
            <Header />
            <Bio />
            <Projects />
            <Apps />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
