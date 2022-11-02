import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import MatchNav from './MatchNav'
import Chat from './Chat'

const Match = ({user}) => {
    const navigate = useNavigate()

    const { id } = useParams()
    const [match,setMatch] = useState()
    const [tab,setTab] = useState('profile')
    const [roomID,setRooomID] = useState('defaultChat')
    const navBack = () => {
        navigate(-1)
    }

    const displayTab = (tab) => {
        setTab(tab)
    }

    


    useEffect(() => {

        const getMatch = async () => {
            if (user) {
                const res = await fetch(`/v1/profiles/${id}`)
                const match = await res.json()
                setMatch(match)
                const chatRoomID = match.matches.filter((e)=>{
                    return (e.match === user._id.toString())
                })[0].chatRoomID
                setRooomID(chatRoomID+'/')
            }
        } 
        getMatch()

    },[user])
    

    return (
        <>
            <div>
            {!match? <p>Loading...</p> :
                <div className='match-content'>
                    <div className='match-nav'>
                        <MatchNav match={match} navBack={navBack} displayTab={displayTab} tab={tab}/>
                    </div>

                    {tab==='profile' ? 
                        <>
                            <img src={match.coverImage}/>
                            <p>{match.displayName}</p>
                            <p>{match.dateOfBirth}</p>
                        </>
                        : 
                        <>
                            <Chat user={user} roomID={roomID}/>
                        </>
                        
                    }
                </div>
                }
            </div>
        </>
    )
}


export default Match

