import "./App.css";
import Header from "./Header";
import Projects from "./Projects";
import Bio from "./Bio";
import Apps from "./Apps";

function App() {
  return (
    <div className="App">
      <Header />
      <Bio />
      <Projects />
      <Apps />
      <div style={{ height: "20px" }}></div>
    </div>
  );
}

export default App;
