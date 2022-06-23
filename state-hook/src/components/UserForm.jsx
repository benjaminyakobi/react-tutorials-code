import React, { useState } from 'react'
import useInput from '../custom-hooks/useInput'

function UserForm() {
    const [firstName, bindFirstName, resetFirstName] = useInput('')
    const [lastName, bindLastName, resetLastName] = useInput('')

    //e === event
    const submitHandler = e => {
        e.preventDefault() //to avoid page refresh
        alert(`Hello ${firstName} ${lastName}`)
        resetFirstName()
        resetLastName()
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>First name</label>
                    <input type='text' {...bindFirstName} /> {/*equivalue to: */}
                    {/* <input type='text' value={bindFirstName.value} onChange={bindFirstName.onChange} /> */}
                </div>
                <div>
                    <label>Last name</label>
                    <input type='text' {...bindLastName} /> {/*equivalue to: */}
                    {/* <input type='text' value={bindLastName.value} onChange={bindLastName.onChange} /> */}
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default UserForm
