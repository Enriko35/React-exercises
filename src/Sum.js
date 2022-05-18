import React from 'react'

const Sum = (props) => {
    const sum = props.numbers.reduce((a, b)=> a + b,0)

return (
    <div>
      <h1>The result is:{sum}</h1>
    </div>
  )
}

export default Sum
