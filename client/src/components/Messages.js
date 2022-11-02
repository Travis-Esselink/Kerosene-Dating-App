
import { ref, onValue } from "firebase/database";
import { useState, useEffect } from 'react'

const Messages = ({db, username, roomID}) => {
    const [messages1, setMessages1] = useState([])
    const fetchChat = ref(db, roomID);


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
            <li className={`${username === msg.username ? "sent" : "receive"}`}
                key={msg.key}
                username={msg.username}
                message={msg.message}
            >{`${msg.message}`}</li>
        )
    })
return renderedMessages
}

export default Messages