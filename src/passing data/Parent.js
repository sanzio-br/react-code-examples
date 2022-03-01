import React from 'react'
import Header from './Header'
import Body from './Body'

export default function App(){
    const [user, setUser] = React.useState("joe")
    return(
        <div>
        <Header userName = {user} />
        <Body userName = {user} />
        </div>
        )
}