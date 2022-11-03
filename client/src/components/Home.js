import { ref, onValue } from "firebase/database";
import { db } from './lib/FirebaseDatabase'
import { useState,useEffect } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import BrandLogo from "../images/two-hearts-48.png"
import Swipe from "./Swipe"
import HomeNav from "./HomeNav"
import Matches from "./Matches"
import { useParams } from 'react-router-dom'

import NavHeader from "./NavHeader"

const Home = ({user}) => {

    const { tab } = useParams()
    const [needQueue,setNeedQueue] = useState(0)
    const [queue,setQueue] = useState([])
    const [showMatch,setShowMatch] = useState(false)
    const [display,setDisplay] = useState(tab)


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
                
                setNotMessagedMatches(notMessaged)
                setMessagedMatches(messaged)
            }
            getMatches()
        }
    },[user])

    useEffect( () => {
        const getQueue = async () => {
            const res = await fetch('/v1/profiles')
            let data = await res.json()
            setQueue(data.reverse())  
        }
        getQueue()
        
    },[])

    const updateQueue = async () => {
        const res = await fetch('/v1/profiles')
        let data = await res.json()
        const newQueue = data.reverse()
        setQueue(newQueue)
    }


    const handleNavClick = (tab) => {
        setDisplay(tab)
    }

    const handleMatch = () => {
        setShowMatch(true)
    }



    return (
        <>
        <NavHeader />
            {display==='main' ? 
                <Swipe queue={queue} setQueue={setQueue} updateQueue={updateQueue} user={user} handleMatch={handleMatch}/> : 
                <Matches notMessagedMatches={notMessagedMatches} messagedMatches={messagedMatches}/>
            }

            {/* Modal setShowMatch={setShowMatch} */}
            
            <HomeNav display={display} handleNavClick={handleNavClick}/>
        </>
    )
}

export default Home