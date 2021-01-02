import "./App.css";
import Header from "./Header";
import Projects from "./Projects";
import Bio from "./Bio";
import Apps from "./Apps";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Resume from "./Resume";

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
      <div style={{ height: "20px" }}></div>
    </div>
  );
}

export default App;
