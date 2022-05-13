import React from "react";

export class ClickTracker extends React.Component {
  state = {
    Click: null,
  };
  handleClick = (event) => {
    this.setState({
      Click: event.target.name,
    });
  };

  render() {
    return (
      <div>
        <h1>Last button is: {this.state.Click}</h1>
        <button onClick={this.handleClick} name="button1">
          Button-1
        </button>
        <button onClick={this.handleClick} name="button2">
          Button-2
        </button>
        <button onClick={this.handleClick} name="button3">
          Button-3
        </button>
      </div>
    );
  }
}
