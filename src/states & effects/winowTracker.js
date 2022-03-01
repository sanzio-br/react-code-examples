import React from "react"

export default function WindowTracker() {
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)
    React.useEffect(()=>{
        function handleWidth(){
            setWindowWidth(window.innerWidth)
        }
        window.addEventListener("resize",handleWidth)
        // useEffect cleanup function
        return function(){
            window.removeAddEventListener("resize", handleWidth)
        }
    },[])
    return (
        <h1>Window width: {windowWidth}</h1>
    )
}
