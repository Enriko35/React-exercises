import React from "react";

export class Login extends React.Component {
  state = {
    username: "",
    password: "",
    remember: false,
  };

  handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    const type = event.target.type;
    const checked = event.target.checked;

    this.setState({
      [name]: type === "checkbox" ? checked : value,
    });
  };

  handleLogin = () => {
    this.setState({
      username: "eric",
      password: "world33",
      remember: true,
    });
  };

  handleResetState = () => {
    this.setState({
      username: "",
      password: "",
      remember: false,
    });
  };

  render() {
    return (
      <div>
        <div>
          <input
            name="username"
            value={this.state.username}
            onChange={this.handleInputChange}
          />
          <input
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleInputChange}
          />
          <input
            name="remember"
            type="checkbox"
            checked={this.state.remember}
            onChange={this.handleInputChange}
          />
          <button
            style={{
              backgroundColor: this.state.password.length < 8 ? "red" : "green",
            }}
            onClick={this.handleLogin}
          >
            Invio
          </button>
          <button onClick={this.handleResetState}>Reset</button>
        </div>
      </div>
    );
  }
}
