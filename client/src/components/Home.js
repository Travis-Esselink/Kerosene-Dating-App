
import { useState,useEffect } from 'react'
<<<<<<< HEAD
// import Modal from 'react-bootstrap/Modal';

=======
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import BrandLogo from "../images/two-hearts-48.png"
>>>>>>> main
import Swipe from "./Swipe"
import NavMain from "./NavMain"

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


    const handleMatch = () => {
        setShowMatch(true)
    }



    return (
        <>
<<<<<<< HEAD
            <Swipe queue={queue} setQueue={setQueue} updateQueue={updateQueue} user={user} handleMatch={handleMatch}/>
            <NavMain display={'main'} />
=======
        <NavHeader />
            {display==='main' ? 
                <Swipe queue={queue} setQueue={setQueue} updateQueue={updateQueue} user={user} handleMatch={handleMatch}/> : 
                <Matches notMessagedMatches={notMessagedMatches} messagedMatches={messagedMatches}/>
            }

            {/* Modal setShowMatch={setShowMatch} */}
            
            <HomeNav display={display} handleNavClick={handleNavClick}/>
>>>>>>> main
        </>
    )
}

export default Home