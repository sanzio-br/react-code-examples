import React from "react"
import user from "../src/imgs/user.png"
import empty from "../src/imgs/star-empty.png"
import filled from "../src/imgs/star-filled.png"
import Star from './Star'
export default function Page() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: true
    })

    // let starIcon = contact.isFavorite ? filled : empty
    
    function toggleFavorite() {
        setContact(prevContact =>{
            return{
                ...prevContact,
                isFavorite: !prevContact.isFavorite
            }
        })
    }
    
    return (
        <main>
            <article className="card">
                <img src={user} className="card--image"  alt=""/>
                <div className="card--info">
                    <Star 
                    starIcon = {contact.isFavorite ? filled : empty  } 
                    Click = {toggleFavorite}
                    />
                    <h2 className="card--name">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="card--contact">{contact.phone}</p>
                    <p className="card--contact">{contact.email}</p>
                </div>
                
            </article>
        </main>
    )
}











// const [isGoingOut, setIsGoingOut ] = React.useState(true)
// function handleClick(){
//     setIsGoingOut(prevState => !prevState)
// }

// <div className = "state">
// <h1 className = "state--title">Do you feel like going out tonight?</h1>
// <div className="state--value" onClick={handleClick}>
//     <h1>{isGoingOut === true ? "Yes": "No"}</h1>
// </div>
// </div>









