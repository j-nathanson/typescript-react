import React from 'react'

// returns undefined since it is just console logging
type InputProps = {
    value: string
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = (props: InputProps) => {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => { console.log(event) }

    return (
        // onChange handler is defined outside of the Input Function
        // <input type="text" value={props.value} onChange={props.handleChange} />

        // onchange handler defined within the function
        <input type="text" value={props.value} onChange={handleInputChange} />
    )
}

//could send props.handle change or same function handleInputChange()