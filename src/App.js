import "./App.css";
import Header from "./Components/Home/Header";
import Projects from "./Components/Home/Projects";
import Bio from "./Components/Home/Bio";
import Apps from "./Components/Home/Apps";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/apps">
            <Header show={true} />
            <div className="space"> </div>
            <Apps />
          </Route>{" "}
          <Route path="/projects">
            <Header show={true} />
            <div className="space"> </div>
            <Projects />
          </Route>{" "}
          <Route path="/">
            <Header show={false} />
            <Bio />
            <Projects />
            <Apps />
          </Route>{" "}
        </Switch>{" "}
      </Router>{" "}
    </div>
  );
}

export default App;
