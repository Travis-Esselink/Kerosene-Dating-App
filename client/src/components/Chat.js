import { db } from './lib/FirebaseDatabase'
import Messages from './Messages'
import { ref, set } from "firebase/database";
import { useState, useRef, useEffect } from 'react'
import "../chat.css"



const Chat = ({ user, roomID }) => {
    const username = user.displayName
    const initialField = ''
    const [field, setField] = useState(initialField)
    const [message1, setMessage1] = useState({})
    const [text, setText] = useState({value: ''})


    // Form submission logic for sending messages
    const onFormSubmit = (newMessageField) => {
        const timestamp = Date.now()
        const newMessage = set(ref(db, roomID + timestamp), {
            username: username,
            message: newMessageField,
        });
        setMessage1(newMessage)
    }

    const handleChange = (event) => {
        const { value, maxLength, } = event.target
        let updatedField = { username }
        updatedField = value
        if (value.length <= maxLength ) {
        setField(updatedField)
        
        }
        setText(event.target.value)
        console.log(text.length)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        onFormSubmit(field)
        setField(initialField)
    }
    //Receiving text messages




    return (
        <>
            <div id="chat">

                <ul id="messages">
                    <Messages db={db} username={username} roomID={roomID} />
                </ul>

                <form id="message-form" onSubmit={handleSubmit}>
                    <input id="message-input" type="text" maxLength={600} autoComplete="off" value={field} onChange={handleChange} />
                    <input id="message-btn" type="submit" value="Send" disabled={text.length === 0 ? true : false} />
                </form>
            </div>
        </>
    )

}

export default Chat