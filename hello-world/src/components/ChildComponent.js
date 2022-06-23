//video 15
import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            <button onClick={() => props.greetHandler('Ilay')}>Grret Parent</button>
        </div>
    )
}

export default ChildComponent
