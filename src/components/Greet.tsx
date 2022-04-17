import React from 'react'

//use types for application, interface for libraries, but are very similar
type GreetProps = { name: string }

// need to define what type structure the props are
export const Greet = (props:GreetProps) => {
    return (
        <div>
            <h2>hello {props.name}</h2>
        </div>
    )
}
