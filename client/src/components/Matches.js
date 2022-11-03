import { useState, useEffect } from 'react'
import MatchThumb from './MatchThumb'
import Match from './Match'
import { Link, useNavigate } from 'react-router-dom'


const Matches = ({ notMessagedMatches, messagedMatches, user }) => {

    return (
        <>
            <div className="match-gallery">
                <div className="match-gallery-inner">
                {notMessagedMatches.map((match) =>
                    <Link className="match-thumb-link" to={`/home/matches/${match._id}`}>
                        <div className="match-thumb-container">
                            <MatchThumb profile={match} key={`${match._id}thumb`} />
                            <p className='match-thumb-name'>{match.displayName}</p>
                            
                        </div>
                    </Link>
                )}
                </div>
            </div>
            <div className="message-gallery">
                <h3 className="message-gallery-title">MESSAGES</h3>
                {messagedMatches.map((match) =>
                    <Link className="match-thumb-link" to={`/home/matches/${match._id}`}>
                        <div className="message-thumb-container">
                            <MatchThumb profile={match} key={`${match._id}messaged`} />
                            <div className="name-message-div">
                                <p className='message-thumb-name' >{match.displayName}</p>
                                <span className="match-thumb-message">{match.latestMessage.message}</span>
                            </div>
                        </div>
                    </Link>
                )}
            </div>
        </>
    )
}

export default Matches