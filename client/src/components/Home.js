
import { useState,useEffect } from 'react'
// import Modal from 'react-bootstrap/Modal';

import Swipe from "./Swipe"
import NavMain from "./NavMain"

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
            <Swipe queue={queue} setQueue={setQueue} updateQueue={updateQueue} user={user} handleMatch={handleMatch}/>
            <NavMain display={'main'} />
        </>
    )
}

export default Home