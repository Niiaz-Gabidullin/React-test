import React from "react";
import classes from "./Message.module.css";

export default function Message(props) {
  return (
    <div className={classes.Wrapper}>
      <h1 className={classes.Text}>Hello React</h1>
      <h2>{props.Text}</h2>
    </div>
  );
}
