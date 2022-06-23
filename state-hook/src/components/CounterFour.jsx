import React, { useState } from 'react'
import useCounter from '../custom-hooks/useCounter'

function CounterFour() {
    const [count, increment, decrement, reset] = useCounter(0, 1)

    return (
        <div>
            <h2>Count (Four): {count}</h2>
            <button onClick={increment}> Increment </button>
            <button onClick={decrement}> Decrement </button>
            <button onClick={reset}> Reset </button>
        </div>
    )
}

export default CounterFour
