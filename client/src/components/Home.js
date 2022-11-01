
import { useState,useEffect } from 'react'
// import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import BrandLogo from "../images/two-hearts-48.png"
import Swipe from "./Swipe"
import HomeNav from "./HomeNav"
import Matches from "./Matches"


const Home = ({user}) => {
    const [needQueue,setNeedQueue] = useState(0)
    const [queue,setQueue] = useState([])
    const [showMatch,setShowMatch] = useState(false)
    const [display,setDisplay] = useState('main')
    const [firstMount,setFirstMount] = useState(true)


    const [matches,setMatches] = useState([])
    const [messagedMatches,setMessagedMatches] = useState ([])
    
    useEffect(() => {
        const getMatches = async () => {
            const res = await fetch('/v1/matches')
            const data = await res.json()
            console.log(data)
            setMatches(data)
        }
        getMatches()
        console.log(matches)
    },[])

    useEffect( () => {
        const getQueue = async () => {
            const res = await fetch('/v1/profiles/7')
            let data = await res.json()
            setQueue(data.reverse())  
        }
        getQueue()
        
    },[])

    const updateQueue = async () => {
        const res = await fetch('/v1/profiles/7')
        let data = await res.json()
        const newQueue = [...data].reverse()
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
            {display==='main' ? 
                <Swipe queue={queue} setQueue={setQueue} updateQueue={updateQueue} user={user} handleMatch={handleMatch}/> : 
                <Matches matches={matches}/>
            }

            {/* Modal setShowMatch={setShowMatch} */}
            
            <HomeNav display={display} handleNavClick={handleNavClick}/>
        </>
    )
}

export default Home