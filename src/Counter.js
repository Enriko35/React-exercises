import React, {useEffect, useState } from 'react'

const Counter = ({initialValue = 0}) => {
const [counter, setCounter] = useState(initialValue)

useEffect(() => {
console.log(`Counter start in: ${counter}`)
}, [counter])



function onCounterChange() {
  setCounter(counter + 1)

}

  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button onClick={onCounterChange}>Increment</button>
    </div>
  )
}

export default Counter

