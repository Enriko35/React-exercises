import React from "react";
import ClickCounter from "./ClickCounter";
import { ClickTracker } from "./ClickTracker";
import Hello from "./Hello";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { Login } from "./Login";
import { TodoList } from "./TodoList";
import { UncontrolledLogin } from "./UncontrolledLogin";
import { Container } from "./Container";

export class App extends React.Component {
  render() {
    return (
      <Container>
        <Hello />
        <InteractiveWelcome />
        <ClickCounter />
        <ClickTracker />
        <Login />
        <UncontrolledLogin />
        <TodoList />
      </Container>
    );
  }
}
