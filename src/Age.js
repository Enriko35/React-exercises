import React from "react";

class Age extends React.Component {
  render() {
    return (
      <div>
        <p>
          <p>your age is: {this.props.age}</p>
        </p>
      </div>
    );
  }
}

export default Age;
