//47
import React, { useState } from 'react'

function HookCounterThree() {
    const [name, setName] = useState({ firstName: '', lastName: '' })

    return (
        <div>
            <form>
                <input
                    type='text'
                    value={name.firstName}
                    onChange={event => setName({ ...name, firstName: event.target.value })}
                />

                <input
                    type='text'
                    value={name.lastName}
                    onChange={event => setName({ ...name, lastName: event.target.value })}
                />

                <h2>Firstname: {name.firstName}</h2>
                <h2>Lastname: {name.lastName}</h2>
                <h2>{JSON.stringify(name)}</h2>
            </form>
        </div>
    )
}

export default HookCounterThree
