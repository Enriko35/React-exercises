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
      <Container title={"React-lesson"}>
        <Hello />
        <InteractiveWelcome />
        <ClickCounter />
        <ClickTracker />
        <Login />
        <UncontrolledLogin />
        <TodoList
          render={(names, addTodo, reset, removeTodo) => {
            return (
              <div>
                <form onSubmit={addTodo}>
                  <input name="todo" type="text" />
                  <button type="submit">Submit</button>
                  <button onClick={reset}>Reset</button>
                </form>
                <ul>
                  {names.map((item, index) => {
                    return (
                      <div>
                        <li>
                          {item}
                          <button onClick={() => removeTodo(index)}>x</button>
                        </li>
                      </div>
                    );
                  })}
                </ul>
              </div>
            );
          }}
        />
      </Container>
    );
  }
}
