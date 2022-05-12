import React from "react";

class Age extends React.Component {
  render() {
    return (
      <div>
        <p>
          {this.props.age > 18 && this.props.age < 65 ? (
            <p>your age is: {this.props.age}</p>
          ) : null}
        </p>
      </div>
    );
  }
}

export default Age;
