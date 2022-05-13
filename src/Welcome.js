import React from "react";
import Age from "./Age";
class Welcome extends React.Component {
  render() {
    return (
      <div>
        <p>
          Welcome, <strong>{this.props.name}!</strong>
        </p>
        <Age age={15} name="Jhonn" />
      </div>
    );
  }
}
Welcome.defaultProps = {
  name: "Jhonny",
};
export default Welcome;
