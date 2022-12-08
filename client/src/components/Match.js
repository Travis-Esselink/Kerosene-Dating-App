import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import NavMatch from './NavMatch'
import Chat from './Chat'
import Unmatch from './Unmatch'
import Button from 'react-bootstrap/Button';
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import Loading from './Loading'
import ProfileCard from './ProfileCard'


const Match = ({user, userFetched}) => {
    const navigate = useNavigate()

    const { id } = useParams()
    const [match,setMatch] = useState()
    const [tab,setTab] = useState('messages')
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
    
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false)
    }

    const handleShow = () => {
        setShow(true)
    }

    return (
        <>
            <div>
            {(!match || !userFetched) ? < Loading /> :
                <div className='match-content'>
                    <div className='match-nav'>
                        <NavMatch match={match} navBack={navBack} displayTab={displayTab} tab={tab}/>
                    </div>

                    {tab==='profile' ? 
                        <>
                            <ProfileCard userProfile={match} />
                            <div className="unmatch-butt-div">
                            <ThemeProvider prefixes={{ btn: 'unmatch-button' }}>
                                <Button variant="danger" onClick={handleShow}>Unmatch</Button>
                            </ThemeProvider>
                            </div>
                            <Unmatch show={show} handleClose={handleClose} match={match}/>
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

