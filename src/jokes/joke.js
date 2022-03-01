import React from "react"

export default function Joke(props) {
    const [isShown , setIsShown] = React.useState(false)
    
    function handleClick(){
        setIsShown(prevState => !prevState)
    }
    return (
        <div>
            {props.setup && <h3>{props.setup}</h3>}
            {isShown && <p>{props.punchline}</p>}
            <button onClick = {handleClick}>{ isShown ? "Hide" : "Show"} punchline</button>
            <hr />
        </div>
    )
}