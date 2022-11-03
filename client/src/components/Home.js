import React, { useState,useEffect } from 'react'


import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import BrandLogo from "../images/two-hearts-48.png"

import Swipe from "./Swipe"
import NavMain from "./NavMain"
import MatchModal from "./MatchModal"

import NavHeader from "./NavHeader"

const Home = ({user}) => {

    const [queue,setQueue] = useState([])
    const [showMatch,setShowMatch] = useState(false)
    const [modalShow, setModalShow] = React.useState(false);

    console.log(user,'user')
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


    const handleMatch = (match) => {
        setShowMatch(true)
        setModalShow(true)
    }

    return (
        <>
            <Swipe queue={queue} setQueue={setQueue} updateQueue={updateQueue} user={user} handleMatch={handleMatch}/>

            <MatchModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            />
            
            <NavMain display={'main'} />
        </>
    )
}

export default Home