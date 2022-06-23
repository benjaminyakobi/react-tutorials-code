import { useState } from 'react'

function useInput(initialValue) {
    const [value, setValue] = useState(initialValue)

    //reset function
    const reset = () => {
        setValue(initialValue)
    }

    //object
    const bind = {
        value: value,
        onChange: e => { setValue(e.target.value) } // e === event
    }

    return [value, bind, reset]
}

export default useInput
