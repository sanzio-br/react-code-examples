import React from "react"
import './style.css'
import WindowTracker from "./winowTracker"

export default function App() {
    /**
     * Challenge:
     * 1. Create state called `show`, default to `true`
     * 2. When the button is clicked, toggle `show`
     * 3. Only display `<WindowTracker>` if `show` is `true`
     */
    const [show, setShow] = React.useState(true)

    function handleClick(){
        setShow(prevShow => !prevShow)
    }
    return (
        <div className="container">
            <button onClick={handleClick}>
                Toggle WindowTracker
            </button>
            {show && <WindowTracker />}
        </div>
    )
}
