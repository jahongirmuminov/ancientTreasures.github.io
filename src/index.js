import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import {StateProvider} from './context/GlobalState'
ReactDOM.render(
  <StateProvider>
    <App />
  </StateProvider>,
 document.getElementById("root"));
