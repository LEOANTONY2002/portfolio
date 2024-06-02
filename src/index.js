import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { Provider } from "react-redux";
import {store} from "./redux/store"
import Splash from "./screens/Splash";

ReactDOM.render(
    <Provider store={store}>
      <Splash />
      <App />
    </Provider>,
  document.getElementById("root")
);

