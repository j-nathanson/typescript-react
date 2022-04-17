import React from 'react'

//use types for application, interface for libraries, but are very similar
type GreetProps = {
    name: string,
    messageCount: number,
    isLoggedIn: boolean
}

// need to define what type structure the props are
export const Greet = (props: GreetProps) => {
    return (
        <div>
            <h2>
                {
                    props.isLoggedIn
                        ? `hello ${props.name} you have ${props.messageCount} unread messages`
                        : `Welcome Guest`
                }
            </h2>
        </div>
    )
}
