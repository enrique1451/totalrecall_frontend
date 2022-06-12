import React from "react";
import "./Message.css"

function Message({message, type}) {
    return(
        <div className={type}>{message}</div>

    )
}

export default Message;