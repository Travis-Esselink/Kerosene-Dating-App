
import { ref, onValue } from "firebase/database";
import { useState, useEffect, useRef } from 'react'
import { Fragment } from 'react'
const Messages = ({db, username, roomID}) => {
    const [messages1, setMessages1] = useState([])
    const fetchChat = ref(db, roomID);

    const messagesEndRef = useRef(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView()
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages1]);


    useEffect(() => {
       

        return onValue(fetchChat, (snapshot) => {
            const messages = snapshot.val();
            let messageHistory = []
            if (snapshot.exists()) {
                for (let key in messages) {
                    const mess = messages[key]
                    messageHistory.push({ key: key, username: mess.username, message: mess.message })
                }
                setMessages1(messageHistory)
            }
        });
    }, [])

    const renderedMessages = messages1.map((msg) => {
        return (
            <Fragment key={msg.key}>
            <li className={`${username === msg.username ? "sent" : "receive"}`}
                
                username={msg.username}
                message={msg.message}
            >{`${msg.message}`}</li>
             <div ref={messagesEndRef} />
            </Fragment>
        )
    })
return renderedMessages
}

export default Messages