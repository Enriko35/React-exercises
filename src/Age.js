import React from "react";

class Age extends React.Component {
  render() {
    return (
      <div>
        <p>Your age is:{this.props.age > 18 ? this.props.age : false}</p>
      </div>
    );
  }
}

export default Age;
