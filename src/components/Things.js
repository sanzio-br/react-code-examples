import React from 'react'
export default function Page(){
    const [thingsArray, setThingsArray] = React.useState(["Thing 1","thing 2"]);

    function addItem(){
        setThingsArray(prevThingsArray => [...prevThingsArray, `Thing ${thingsArray.length + 1}`])
    }
    const thingsElement = thingsArray.map(thing => <p key= {thing}>{thing}</p>)
    return(
        <div>
            <button onClick={addItem}>Add item</button>
            <div>{thingsElement}</div>
        </div>
    )
}
