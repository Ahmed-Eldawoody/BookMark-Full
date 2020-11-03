import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
//
//
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./Theme/Theme";
//
//
import { BrowserRouter as Router } from "react-router-dom";
//
//
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Router>
      <App />
    </Router>
  </ThemeProvider>,
  document.getElementById("root")
);
