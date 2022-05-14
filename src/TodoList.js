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

  render() {
    return (
      <div>
        <form onSubmit={this.handleAddTodo}>
          <input name="todo"></input>
          <ul>
            {this.state.names.map((name) => (
              <li>{name}</li>
            ))}
          </ul>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
