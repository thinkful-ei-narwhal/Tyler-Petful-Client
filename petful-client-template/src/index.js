import "./index.css";
import App from "./App/App";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { UserContextProvider } from "./context/UserContext";

ReactDOM.render(
  <Router>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </Router>,
  document.getElementById("root")
);
