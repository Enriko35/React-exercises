import React, { createRef } from "react";

export class UncontrolledLogin extends React.Component {
  _formRef = createRef();
  handleFormSubmit = (event) => {
    event.preventDefault();

    const username = event.target.elements.username.value;
    const password = event.target.elements.password.value;
    const remember = event.target.elements.remember.checked;

    console.log({
      username,
      password,
      remember,
    });
  };
  handleLogIn = () => {
    this._formRef.current.elements.username.value = "Jhonny";
    this._formRef.current.elements.password.value = "Arkansas55";
    this._formRef.current.elements.remeber.checked = true;
  };
  render() {
    return (
      <div>
        <form ref={this._formRef} onSubmit={this.handleFormSubmit}>
          <input name="username" defaultValue="Jimmy" />
          <input name="password" type="password" />
          <input name="remember" type="checkbox" />

          <button type="submit">Login</button>
          <button type="reset">Reset</button>
          <button type="button" onClick={this.handleLogIn}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}
