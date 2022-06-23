//45
import React, { useState } from 'react'

function HookCounter() {
    const [count, setCount] = useState(0) //Array destructuring (ES6): [nameOfState, methodToChangeTheState]
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Hook Count {count}</button>
        </div>
    )
}

export default HookCounter
