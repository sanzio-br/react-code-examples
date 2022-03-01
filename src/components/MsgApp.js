import React from "react";

export default function Msg(){
    const [messages, setmessages] = React.useState(["a", "b"])
    return(
        <div>
            {messages.length === 0 ?  <h1>You're all caught up</h1> : <h1>You have {messages.length} unread message{messages.length > 1 ? "s": ""}!</h1> }
        </div>
    )
}