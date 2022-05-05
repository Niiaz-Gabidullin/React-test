import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import classes from "./Index.module.css";

// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className={classes.Main}>
      <App props1="Hello, my name is Niiaz and I am a geekbrains student" />
    </div>
  </React.StrictMode>
);
