
import { useState,useEffect } from 'react'
// import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import BrandLogo from "../images/two-hearts-48.png"
import Swipe from "./Swipe"

const Home = ({user}) => {
    const [needQueue,setNeedQueue] = useState(0)
    const [queue,setQueue] = useState([])
    const [matches,setMatches] = useState([])
    const [showMatch,setShowMatch] = useState(false)
    


    useEffect( () => {
        const cloneQueue = [...queue].slice(-2)

        console.log('ues effect called')
        const getQueue = async () => {
            const res = await fetch('/v1/profiles')
            const data = await res.json()
            setQueue([...data,...cloneQueue])
            queue.forEach((e)=>{
                console.log(e.displayName)
            })

            
        }
        getQueue()
        
    },[needQueue])

    return (
        <>
            <Swipe queue={queue} setQueue={setQueue} setNeedQueue={setNeedQueue} user={user}/>
            {/* Modal setShowMatch={setShowMatch} */}
        </>
    )
}

export default Home