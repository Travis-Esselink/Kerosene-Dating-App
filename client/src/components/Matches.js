import { useState,useEffect } from 'react'
import MatchThumb from './MatchThumb'
import { Link, useNavigate } from 'react-router-dom'
import { ref, onValue } from "firebase/database";
import { db } from './lib/FirebaseDatabase'
import HomeNav from "./NavMain"
import NavConsistent from './NavConsistent';



const Matches = ({user, setUser}) => {

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
                                const keys = Object.keys(messages)
                                const latestMessageTime = Math.max(...keys)
                                const latestMessage = messages[latestMessageTime]

                                latestMessage.time = latestMessageTime
                                match.latestMessage = latestMessage
                                messaged.push(match)
                            } else {
                                notMessaged.push(match)
                            }
                        })
                    })
                }


                messaged.sort((a,b)=>{

                    return a.latestMessage.time>b.latestMessage.time ? -1:1
                })

                setNotMessagedMatches(notMessaged)
                setMessagedMatches(messaged)
            }
            getMatches()
        }
    },[user])

    return (

        <div className="matches-contianer">
        <NavConsistent setUser={setUser} className="nav-consistent"/>
            <div className="match-gallery">

                <div className="match-gallery-inner">
                {notMessagedMatches.map((match) =>
                    <Link className="match-thumb-link" to={`/home/matches/${match._id}`} key={`${match._id}linkn`}>
                        <div className="match-thumb-container">
                            <MatchThumb profile={match} key={`${match._id}thumb`} />
                            <p className='match-thumb-name'>{match.displayName}</p>
                            
                        </div>
                    </Link>

                )}
                </div>
            </div>
            <div className="message-gallery">

                <h3 className="message-gallery-title">MESSAGES</h3>
                {messagedMatches.map((match) =>
                    <Link className="match-thumb-link" to={`/home/matches/${match._id}`} key={`${match._id}linkm`}>
                        <div className="message-thumb-container">
                            <MatchThumb profile={match} key={`${match._id}messaged`} />
                            <div className="name-message-div">
                                <p className='message-thumb-name' >{match.displayName}</p>
                                <span className="match-thumb-message">{match.latestMessage.username === user.username ? 'You' : match.latestMessage.username}: {match.latestMessage.message}</span>
                            </div>
                        </div>
                    </Link>

                )}
            </div>
            <HomeNav display={'matches'}/>
        </div>
       
    )
}

export default Matches