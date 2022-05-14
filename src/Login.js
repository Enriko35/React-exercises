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
      [name]: type === "checkbox" ? checked : console.log(value),
    });
  };

  handleLogIn = () => {
    this.setState({
      username: "Jhon",
      password: "hello87",
      remember: true,
    });
  };
  render() {
    return (
      <div>
        <input
          name="username"
          type="username"
          value={this.state.username}
          onChange={this.handleInputChange}
        ></input>
        <input
          name="password"
          type="password"
          value={this.state.password}
          onChange={this.handleInputChange}
        ></input>
        <input
          name="remember"
          type="checkbox"
          value={this.state.remember}
          onChange={this.handleInputChange}
        ></input>
        <button onClick={this.handleLogIn}>Login</button>
      </div>
    );
  }
}
