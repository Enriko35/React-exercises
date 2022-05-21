import React from "react";
import Age from "./Age";
class Welcome extends React.Component {
  render() {
    return (
      <div>
        <p>
          Welcome, <strong>{this.props.name}!</strong>
        </p>
         {this.props.age > 18 && this.props.age < 65 ? ( <Age age={this.props.age}/>) : (null)}
          
      </div>
    );
  }
}
Welcome.defaultProps = {
  name: "Enrico",
  age: 62,
};

export default Welcome;
