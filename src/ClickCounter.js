import React from "react";
class ClickCounter extends React.Component {
  state = {
    count: 0,
  };
  handleClickCounter = () => {
    this.setState((state) => {
      return { count: state.count + 1 };
    });
  };
  render() {
    return (
      <>
        <p>Increment: {this.state.count}</p>
        <button onClick={this.handleClickCounter}>Count</button>
      </>
    );
  }
}

export default ClickCounter;
