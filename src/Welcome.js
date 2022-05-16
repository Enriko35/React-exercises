import React from "react";
import Age from "./Age";
class Welcome extends React.Component {
  render() {
    return (
      <div className="welcome">
        <p>Welcome,{this.props.age}</p>
        <Age age={15} name="Jhonn" />
      </div>
    );
  }
}
Welcome.defaultProps = {
  name: "Jhonny",
};
export default Welcome;
