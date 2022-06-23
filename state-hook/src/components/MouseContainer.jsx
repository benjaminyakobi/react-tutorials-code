import React, { useState } from 'react'
import ClassMouse from './ClassMouse'
import HookMouse from './HookMouse'

function MouseContainer() {
    const [display, setDisplay] = useState(true)
    return (
        <div>
            <button onClick={() => setDisplay(!display)}>Toggle Display</button>
            {display && <HookMouse />}
        </div>
    )
}

export default MouseContainer
