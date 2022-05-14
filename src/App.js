import React from "react";
import ClickCounter from "./ClickCounter";
import { ClickTracker } from "./ClickTracker";
import Hello from "./Hello";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { Login } from "./Login";
import { UncontrolledLogin } from "./UncontrolledLogin";

export class App extends React.Component {
  render() {
    return (
      <div>
        <Hello />
        <InteractiveWelcome />
        <ClickCounter />
        <ClickTracker />
        <Login />
        <UncontrolledLogin />
      </div>
    );
  }
}
