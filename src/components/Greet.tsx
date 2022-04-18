//use types for application, interface for libraries, but are very similar
type GreetProps = {
    name: string,
    messageCount?: number,
    isLoggedIn: boolean
}

// need to define what type structure the props are
export const Greet = (props: GreetProps) => {
    const { messageCount = 0 } = props
    return (
        <div>
            <h2>
                {
                    props.isLoggedIn
                        ? `hello ${props.name} you have ${messageCount} unread messages`
                        : `Welcome Guest`
                }
            </h2>
        </div>
    )
}
