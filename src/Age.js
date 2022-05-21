import React from "react";

class Age extends React.Component {
  render() {
    return (
      <div>
      <p>your age is: {this.props.age} </p>
      <p>Your name is: {this.props.name}</p>
      </div>
    );
  }
}

export default Age;
