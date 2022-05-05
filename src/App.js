import React, { Component } from "react";
import Message from "./Message";

export default class App extends Component {
  render() {
    const { props1 } = this.props;
    return (
      <h2>
        <Message Text={props1} />
      </h2>
    );
  }
}
