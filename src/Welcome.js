import React from "react";
import Age from "./Age";
class Welcome extends React.Component {
  render() {
    return (
      <div>
        <p>
          Welcome, <strong>{this.props.name}!</strong>
        </p>
        <Age age={45} />
      </div>
    );
  }
}
Welcome.defaultProps = {
  name: "Enrico",
  age: 62,
};

export default Welcome;
