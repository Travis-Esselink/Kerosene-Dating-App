
import { useState,useEffect } from 'react'
import MatchThumb from './MatchThumb'


const Matches = ({matches, messagedMatches, user}) => {
    
    return (
        <>
            <div className="match-gallery">
                {matches.map((match)=>
                    <MatchThumb profile={match} />
                )}
            </div>
            <div className="message-gallery">
                
            </div>
        </>
    )
}

export default Matches