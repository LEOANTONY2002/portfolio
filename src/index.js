import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Splash from "./Components/Home/Splash";

ReactDOM.render(
  <React.StrictMode>
    <Splash />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

