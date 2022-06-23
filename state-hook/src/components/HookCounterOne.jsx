import React, { useState, useEffect } from 'react'

function HookCounterOne() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    //useEffect runs after every time the component renders -> equivalent of componentDidMount & componentDidUpdate (class component's LifeCycle methods)
    useEffect(() => {
        console.log('useEffect - Updating document title')
        document.title = `Clicked ${count} times`
    }, [count])

    return (
        <div>
            <input
                type='text'
                value={name}
                onChange={event => setName(event.target.value)}>
            </input>
            <button onClick={() => setCount(count + 1)}> Click {count} times</button>
        </div>
    )
}

export default HookCounterOne
