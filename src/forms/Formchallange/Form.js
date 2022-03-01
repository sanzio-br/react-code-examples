import React from "react"
import './style.css'

export default function App() {
    const [formData, setFormData] = React.useState(
        {
            email:"",
            password:"",
            password2:"",
            join: false
        }
    )
    console.log(formData)
    function handleChange(event){
        const {name, type, value, checked} = event.target
        setFormData(
            prevFormData =>{
                return{
                    ...prevFormData,
                    [name]: type === "checkbox" ? checked : value 
                }
            }
        )
    }
    function handleSubmit(event) {
        event.preventDefault()
        if (formData.password === formData.password2) {
            console.log(  "Successfully signed up")
            
        } else {
            console.log("passwords to not match")
            return
        }
        if (formData.join) {
            console.log("Thanks for signing up for our newsletter!")
        }
    }
    
    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    placeholder="Email address"
                    className="form--input"
                    name="email"
                    value={formData.email}
                    onChange = {handleChange}
                />
                <input 
                    type="password" 
                    placeholder="Password"
                    className="form--input"
                    name="password"
                    value={formData.password}
                    onChange = {handleChange}
                />
                <input 
                    type="password" 
                    placeholder="Confirm password"
                    className="form--input"
                    name="password2"
                    value={formData.password2}
                    onChange = {handleChange}
                />
                
                <div className="form--marketing">
                    <input
                        id="okayToEmail"
                        type="checkbox"
                        checked = {formData.join}
                        onChange = {handleChange}
                        name = "join"
                        
                    />
                    <label htmlFor="okayToEmail">I want to join the newsletter</label>
                </div>
                <button 
                    className="form--submit"
                >
                    Sign up
                </button>
            </form>
        </div>
    )
}
