// import React from "react";
// import CounterDisplay from "./CounterDisplay";

// class Counter extends React.Component {
//   state = {
//     count: this.props.initialCounter,
//   };
//   componentDidMount() {
//     setInterval(() => {
//       this.setState({
//         count: this.state.count + this.props.increment,
//       });
//     }, this.props.time);
//   }
//   render() {
//     return <CounterDisplay count={this.state.count} />;
//   }
// }

// Counter.defaultProps = {
//   initialCounter: 0,
//   increment: 1,
//   time: 1000,
// };
// export default Counter;

import React, { useState } from 'react'

const Counter = ({initialValue = 0}) => {
const [counter, setCounter] = useState(initialValue)

function handleCocunterIncrement() {
  setCounter(counter + 1)

}

  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button onClick={handleCocunterIncrement}>Increment</button>
    </div>
  )
}

export default Counter

