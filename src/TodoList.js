import React from "react";

export class TodoList extends React.Component {
  state = {
    names: ["Beautiful", "La Casa de Papel", "Fratelli d'Italia", "Pinocchio"],
    todo: "",
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
        todo: this.state.names.pop(),
      };
    });
  };

  render() {
    return (
      <div>
        {this.props.render(
          this.state.names,
          this.handleAddTodo,
          this.handleResetState,
          this.handleRemoveLast
        )}
      </div>
    );
  }
}
