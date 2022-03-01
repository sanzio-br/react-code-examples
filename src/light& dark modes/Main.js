import React from "react"
import Navbar from "./components/navbar"
import Page from "./components/Page"
import './style.css'

export default function App() {
    const [darkMode, setDarkMode] = React.useState(false)
    function toggleDarkMode(){
        setDarkMode(prevMode => !prevMode)
    }
    return (
        <div className="container">
            <Navbar 
            toggleDarkMode = {toggleDarkMode}
            darkMode = {darkMode}
            />
            <Page
            darkMode = {darkMode}
            />
        </div>
    )
}