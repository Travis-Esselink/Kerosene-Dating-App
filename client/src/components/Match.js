import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import MatchNav from './MatchNav'

const Match = () => {
    const navigate = useNavigate()

    const { id } = useParams()
    const [match,setMatch] = useState()
    const [tab,setTab] = useState('profile')

    const navBack = () => {
        navigate(-1)
    }

    const displayTab = (setTab) => {
        setTab(tab)
    }

    


    useEffect(() => {
        console.log('effect')
        const getMatch = async () => {
            const res = await fetch(`/v1/profiles/${id}`)
            const match = await res.json()
            console.log(match)
            setMatch(match)
            
        } 
        getMatch()
    },[id])


    return (
        <>
            <div>
            {!match? <p>Loading...</p> :
                <div className='match-content'>
                    <div className='match-nav'>
                        <MatchNav match={match} navBack={navBack} displayTab={displayTab} tab={tab}/>
                    </div>


                    <img src={match.coverImage}/>
                    <p>{match.displayName}</p>
                    <p>{match.dateOfBirth}</p>
                    
                </div>
                }
            </div>
        </>
    )
}


export default Match

