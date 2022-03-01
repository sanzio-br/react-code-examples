import React from 'react'
import Count from './count'
export default function Counter(){
    const [results, setCount] = React.useState(0);
    function add(){
        setCount(prevCount => prevCount + 1)
    }
    function sub(){
        setCount(prevCount => prevCount - 1)
    }
    return(
         <div className = "counter">
            <button className = "counter--minus" onClick={sub}>-</button>
            <Count number = {results} />
            <button className = "counter--plus" onClick={add}>+</button>
</div>
    )
}