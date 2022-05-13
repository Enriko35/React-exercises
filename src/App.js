import React from "react";
import ClickCounter from "./ClickCounter";
import Hello from "./Hello";
import Welcome from "./Welcome";

export class App extends React.Component {
  render() {
    return (
      <div>
        <Hello />
        <Welcome name="Jhonny" />
        <ClickCounter />
      </div>
    );
  }
}
