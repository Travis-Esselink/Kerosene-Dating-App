import { useState,useEffect } from 'react'
import MatchThumb from './MatchThumb'
import Match from './Match'
import { Link, useNavigate } from 'react-router-dom'


const Matches = ({matches, messagedMatches, user}) => {

    return (
        <>
            <div className="match-gallery">

                {matches.map((match)=>
                <Link to={`/home/matches/${match._id}`}>
                    <MatchThumb profile={match} key={`${match._id}thumb`}/> 
                </Link>
                )}
            </div>
            <div className="message-gallery">
                {messagedMatches.map((match)=>
                <Link to={`/home/matches/${match._id}`}>
                    <MatchThumb profile={match} key={`${match._id}messaged`}/> 
                </Link>
                )}
            </div>
        </>
    )
}

export default Matches