import React from "react";
import Welcome from "./Welcome";

export class InteractiveWelcome extends React.Component {
  state = {
    username: "Jhonny",
  };

  render() {
    return (
      <div>
        <Welcome />
        <input name="username" value={this.state.username}>
          {this.props.name}
        </input>
      </div>
    );
  }
}
