import { useState } from 'react'

//initialCount = 0, value = 1 will be used if we don't specify them
//when we call the useCounter
function useCounter(initialCount = 0, value = 1) {
    const [count, setCount] = useState(initialCount)

    const increment = () => {
        setCount(prvCount => prvCount + value)
    }

    const decrement = () => {
        setCount(prvCount => prvCount - value)
    }

    const reset = () => {
        setCount(initialCount)
    }

    return [count, increment, decrement, reset]
}

export default useCounter
