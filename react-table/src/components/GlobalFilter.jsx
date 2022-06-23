import React, { useState } from 'react'
import { useAsyncDebounce } from 'react-table'

export const GlobalFilter = ({ filter, setFilter }) => {
    const [value, setValue] = useState(filter)

    const onChange = useAsyncDebounce(value => {
        setFilter(value || undefined)
    }, 500) //display results after 0.5 second

    return (
        <span>
            Global Search: {' '}
            <input
                value={value || ''}
                onChange={e => {
                    setValue(e.target.value)
                    onChange(e.target.value)
                }}
            />
        </span>
    )
}
