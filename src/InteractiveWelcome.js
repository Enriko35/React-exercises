import React from "react";
import Welcome from "./Welcome";

export class InteractiveWelcome extends React.Component {
  state = {
    username: "Jhonny",
  };

  render() {
    return (
      <div>
        <Welcome name={this.props.name} />
        <input name="username" value={this.state.username}></input>
      </div>
    );
  }
}
