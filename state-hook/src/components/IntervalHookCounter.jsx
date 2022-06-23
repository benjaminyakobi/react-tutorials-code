import React, { useState, useEffect } from 'react'

function IntervalHookCounter() {
    const [count, setCount] = useState(0)
    const [someProp, setSomeProp] = useState(100)

    // First approach -> *with Dependency-Array*
    // const tick = () => {
    //     setCount(count+1)
    // }

    // useEffect(() => {
    //     const interval = setInterval(tick, 1000)

    //     return () => {
    //         clearInterval(interval)
    //     }
    // }, [count])

    // Second approach -> *without Dependency-Array*
    const tick = () => {
        setCount(prvCount => prvCount + 1)
    }



    useEffect(() => {
        //Whenever we need to call a function within useEffect() -> it is recommended to declare the function inside useEffect() and make the call right after the decleration.
        function doSomething() {
            console.log(someProp)
        }
        doSomething()
        const interval = setInterval(tick, 1000)

        return () => {
            clearInterval(interval)
        }
    }, [someProp])

    return (
        <h1>
            Hook {count}
        </h1>
    )
}

export default IntervalHookCounter
