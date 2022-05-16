import React from "react";

export class TodoList extends React.Component {
  state = {
    names: ["Beautiful", "La Casa de Papel", "Fratelli d'Italia", "Pinocchio"],
  };

  handleAddTodo = (event) => {
    event.preventDefault();
    const inputElement = event.target.elements.todo;
    const newEl = inputElement.value;
    inputElement.value = "";
    this.setState((state) => {
      return {
        names: [...state.names, newEl],
      };
    });
  };

  handleResetState = (event) => {
    event.preventDefault();
    this.setState(() => {
      return {
        names: [],
      };
    });
  };

  handleRemoveLast = () => {
    this.setState(() => {
      return {
        name: [].handleRemoveLast(TodoList),
      };
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleAddTodo}>
          <input name="todo"></input>
          <ul>
            {this.state.names.map((name) => (
              <li>
                {name}
                <button type="button" onClick={this.handleRemoveLast}>
                  X
                </button>
              </li>
            ))}
          </ul>
          <button type="submit">Submit</button>
          <button onClick={this.handleResetState}>Reset</button>
        </form>
      </div>
    );
  }
}
