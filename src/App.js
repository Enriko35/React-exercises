import React from "react";
import ClickCounter from "./ClickCounter";
import { ClickTracker } from "./ClickTracker";
import Hello from "./Hello";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { Login } from "./Login";
import { TodoList } from "./TodoList";
import { UncontrolledLogin } from "./UncontrolledLogin";
import { Container } from "./Container";
import { DisplayLenguage } from "./DisplayLenguage";
import { Language } from "./Language";

export class App extends React.Component {
  state = {
    language: "it",
  };

  handleLenguageChange = (event) => {
    this.setState({
      language: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <Container title={"React-lesson"}>
          <div>
            <select
              value={this.state.language}
              onChange={this.handleLenguageChange}
            >
              <option value="en">English</option>
              <option value="it">Italiano</option>
            </select>

            <DisplayLenguage.Provider value={this.state.language}>
              <Language />
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
                                <button onClick={() => removeTodo(index)}>
                                  x
                                </button>
                              </li>
                            </div>
                          );
                        })}
                      </ul>
                    </div>
                  );
                }}
              />
            </DisplayLenguage.Provider>
          </div>
        </Container>
      </div>
    );
  }
}
