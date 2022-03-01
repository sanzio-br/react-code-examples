import React from "react"
import "./style.css"
export default function Form() {
    const [formData, setFormData] = React.useState({
        firstName:"",
        lastName:"",
        emailAddress: "",
        comments:"",
        isFriendly:false,
        employment:"",
        favColor:""
    })
    
    console.log(formData.isFriendly)
    
    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData =>{
            return{
                ...prevFormData,
                [name] : type === "checkbox" ? checked : value
            }
        })
    }
    function handleSubmit(){
        // preventDefault()
        console.log(formData)
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name ="firstName"
                value={formData.firstName}
            />
            <input
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name ="lastName"
                value={formData.lastName}
            />
            <input
                type="email"
                placeholder="Email Address"
                onChange={handleChange}
                name ="emailAddress"
                value={formData.emailAddress}
            />
            <textarea
                placeholder="Leave your comment"
                name="comments"
                onChange={handleChange}
                value={formData.comments}
            />
            <input 
                id="isFriendly"
                name="isFriendly"
                checked={formData.isFriendly}
                type="checkbox"
                onChange={handleChange}
            />
            <label htmlFor="checkbox">are you frendly</label>
            <br/>
            <fieldset>
                <legend>Current employment status</legend>
                <input 
                    type="radio"
                    id="unemployed"
                    value="unemployed"
                    name="employment"
                    onChange={handleChange}
                    checked = {formData.employment === "unemployed"}
                />
                <label htmlFor="unemployed">unemployed</label>
                <br/>
                <input 
                    type="radio"
                    id="Full-time"
                    value="Full-time"
                    name="employment"
                    onChange={handleChange}
                    checked = {formData.employment === "Full-time"}
                />
                <label htmlFor="Full-time">Full-time</label>
                <br/>
                <input 
                    type="radio"
                    id="Part-time"
                    value="Part-time"
                    onChange={handleChange}
                    checked = {formData.employment === "Part-time"}
                    name="employment"
                />
                <label htmlFor="Part-time">Part-time</label>
                <br/>
            </fieldset>
            <br/>
            
            <label htmlFor="favColor">What is your favorite color?</label>
            <br />
            <select 
                id="favColor"
                value={formData.favColor}
                name="favColor"
                onChange={handleChange}
            >
                <option value="">--choose favorite color--</option>
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="indigo">Indigo</option>
                <option value="violet">Violet</option>
            </select>
            <br/>
            <br/>
            <br/>
            {/* <input type="submit" value="submit" /> */}
            <button>submit</button>
        </form>
    )
}