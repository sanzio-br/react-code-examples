import React from 'react'

export default function Main(){
    const [starWarsdata, setStarWarsdata] = React.useState({})
    const [Count, setCount] = React.useState(1)


    React.useEffect(()=>{
        console.log("effect function run")
        fetch(`http://swapi.dev/api/people/${Count}`)
        .then(res => res.json())
        .then(data => setStarWarsdata(data))
    },[Count])
    return(
        <div>
            <h1>The count is {Count}</h1>
            <button onClick={setCount(prevCount => prevCount + 1)}>Get next character</button>
            <pre>{JSON.stringify(starWarsdata, null, 2)}</pre>

        </div>
    )
}