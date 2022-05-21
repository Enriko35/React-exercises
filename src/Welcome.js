import React from "react";
import Age from "./Age";
class Welcome extends React.Component {
  render() {
    return (
      <div>
        <p>
          Welcome, <strong>{this.props.name}!</strong>
        </p>
       {this.props.age && <Age age={this.props.age} />}
      </div>
    );
  }
}
Welcome.defaultProps = {
  name: "Enrico",
  age: 38,
};

export default Welcome;
