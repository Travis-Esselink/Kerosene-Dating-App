import { useState,useEffect } from 'react'
import MatchThumb from './MatchThumb'
import { Link, useNavigate } from 'react-router-dom'
import { ref, onValue } from "firebase/database";
import { db } from './lib/FirebaseDatabase'
import HomeNav from "./NavMain"



const Matches = ({user}) => {

    const [notMessagedMatches,setNotMessagedMatches] = useState([])
    const [messagedMatches,setMessagedMatches] = useState ([])
    
    useEffect(() => {
        if (user) {
            const getRoomID = (match) => {
                const chatRoomID = match.matches.filter((e)=>{
                    return (e.match === user._id.toString())
                })[0].chatRoomID
                return chatRoomID+'/'
            }

            const getMatches = async () => {
                const res = await fetch('/v1/matches')
                const data = await res.json()
                const messaged = []
                const notMessaged = []

                if (data) {
                    data.forEach((match)=>{
                        const roomID = getRoomID(match)
                        const fetchChat = ref(db, roomID)
                        onValue(fetchChat, (snapshot) => {
                            if (snapshot.exists()) {
                                const messages = snapshot.val()
                                console.log(messages,'messages')
                                const keys = Object.keys(messages)
                                const latestMessageTime = Math.max(...keys)
                                const latestMessage = messages[latestMessageTime]
                                match.latestMessage = latestMessage
                                messaged.push(match)
                            } else {
                                notMessaged.push(match)
                            }
                        })
                    })
                }
                console.log('setting matches')
                setNotMessagedMatches(notMessaged)
                setMessagedMatches(messaged)
            }
            getMatches()
        }
    },[user])

    return (
        <>
            <div className="match-gallery">

                {notMessagedMatches.map((match)=>
                <Link to={`/home/matches/${match._id}`} key={`${match._id}linkm`}>

                    <MatchThumb profile={match} key={`${match._id}thumb`}/> 
                </Link>
                )}
            </div>
            <div className="message-gallery">
                {messagedMatches.map((match)=>
                <Link to={`/home/matches/${match._id}`} key={`${match._id}linkn`}>
                        
                    <MatchThumb profile={match} key={`${match._id}messaged`}/> 
                    <span>{match.latestMessage.message}</span>
                </Link>
                )}
            </div>
            <HomeNav display={'matches'}/>

        </>
    )
}

export default Matches