import React from "react";

class Counter extends React.Component {
  state = {
    count: this.props.initialCounter,
  };
  constructor(props) {
    super(props);
    setInterval(() => {
      this.setState({
        count: this.state.count + this.props.increment,
      });
    }, this.props.time);
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
      </div>
    );
  }
}
Counter.defaultProps = {
  initialCounter: 0,
  increment: 1,
  time: 1000,
};
export default Counter;
