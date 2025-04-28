import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Splash from "./screens/Splash";

// Correctly use dynamic import with lazy
const App = lazy(() => import("./App"));

ReactDOM.render(
  <Provider store={store}>
    <Splash />
    <Suspense fallback={<div>Loading...</div>}>
      <App />
    </Suspense>
  </Provider>,
  document.getElementById("root")
);

