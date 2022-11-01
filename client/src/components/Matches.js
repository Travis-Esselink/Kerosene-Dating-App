
import { useState,useEffect } from 'react'
import MatchThumb from './MatchThumb'


const Matches = ({matches, user}) => {
    
    return (
        <>
            
            <div className="match-gallery">
                {matches.map((match)=>
                    <MatchThumb profile={match} />
                )}
            </div>
            <div className="message-gallery">
                Poo
            </div>
        </>
    )
}

export default Matches