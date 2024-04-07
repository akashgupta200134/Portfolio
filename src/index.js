import React from "react";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom";

ReactDOM.render(
  <Router>
    <App></App>
  </Router>,
  document.getElementById("root")
);
