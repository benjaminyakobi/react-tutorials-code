//17+18+19

import React from 'react'

function Person({person}) {
    return (
        <div>
            <h2>I am {person.name}, I know {person.skill} & I am {person.age} years old</h2>
        </div>
    )
}

export default Person
