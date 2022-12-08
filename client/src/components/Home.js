import React, { useState,useEffect } from 'react'


import { useNavigate } from 'react-router-dom';

import Swipe from "./Swipe"
import NavMain from "./NavMain"
import MatchModal from "./MatchModal"
import NavConsistent from './NavConsistent';
import Loading from './Loading'

import NavHeader from "./NavHeader"

const Home = ({user, setUser, userFetched}) => {

    const [queue,setQueue] = useState([])
    const [showMatch,setShowMatch] = useState(false)
    const [modalShow, setModalShow] = React.useState(false);
    
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
        console.log(newQueue)
        setQueue(newQueue)
    }


    const handleMatch = () => {
        setShowMatch(true)
        setModalShow(true)
    }

    return (
        <>
        { !userFetched ? <Loading /> : (
            <>
        <NavConsistent setUser={setUser} className="nav-consistent"/>
            <Swipe queue={queue} setQueue={setQueue} updateQueue={updateQueue} user={user} handleMatch={handleMatch}/>

            <MatchModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            />
            
            <NavMain display={'main'} />
            </>
            )
        }
        </>
    )
}

export default Home