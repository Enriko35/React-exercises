import React, { useState } from "react";

function useCounter(initialValue = 0) {
  const [counter, setCounter] = useState(initialValue);

  function handleCounterIncrement() {
    setCounter((c) => c + 1);
  }

  function handlerCounterDecrement() {
    setCounter((c) => c - 1);
  }

  function handlerCounterReset() {
    setCounter(initialValue);
  }

  return {
    counter: counter,
    onIncrement: handleCounterIncrement,
    onDecrement: handlerCounterDecrement,
    onReset: handlerCounterReset,
  };
}

const Counter = ({ initialValue = 0 }) => {
  const { counter, onIncrement, onDecrement, onReset } =
    useCounter(initialValue);

  return (
    <div>
      <h2>Counter: {counter}</h2>

      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
};

export default Counter;
