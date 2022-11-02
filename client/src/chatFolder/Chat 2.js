import { db } from './Database'
import Messages from './Messages'
import { ref, set } from "firebase/database";
import { useState } from 'react'
import "./chat.css"

const Chat = () => {
    const username = 'chat tester'
    const initialField = ''
    const [field, setField] = useState(initialField)
    const [message1, setMessage1] = useState({})

    // Form submission logic for sending messages
    const onFormSubmit = (newMessageField) => {
        const timestamp = Date.now()
        const newMessage = set(ref(db, "messages2/" + timestamp), {
            username: username,
            message: newMessageField,
        });
        setMessage1(newMessage)
    }

    const handleChange = (event) => {
        const { value } = event.target
        let updatedField = { username }
        updatedField = value
        setField(updatedField)
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
                    <Messages db={db} username={username}/>
                </ul>

                <form id="message-form" onSubmit={handleSubmit}>
                    <input id="message-input" type="text" value={field} onChange={handleChange} />
                    <input id="message-btn" type="submit" value="Send" />
                </form>
            </div>
        </>
    )
}

export default Chat