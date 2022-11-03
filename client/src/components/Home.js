
import { useState,useEffect } from 'react'


import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import BrandLogo from "../images/two-hearts-48.png"

import Swipe from "./Swipe"
import NavMain from "./NavMain"
import NavConsistent from './NavConsistent';

import NavHeader from "./NavHeader"

const Home = ({user}) => {

    const [queue,setQueue] = useState([])
    const [showMatch,setShowMatch] = useState(false)

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
    }



    return (
        <>
        <NavConsistent className="nav-consistent"/>
            <Swipe queue={queue} setQueue={setQueue} updateQueue={updateQueue} user={user} handleMatch={handleMatch}/>
            <NavMain display={'main'} />
        </>
    )
}

export default Home