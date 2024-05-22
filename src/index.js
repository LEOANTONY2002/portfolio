import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { Provider } from "react-redux";
// import Splash from "./Components/Home/Splash";
import {store} from "./redux/store"

ReactDOM.render(
    <Provider store={store}>
      {/* <Splash /> */}
      <App />
    </Provider>,
  document.getElementById("root")
);

