import {useState} from "react"
import TinderCard from "react-tinder-card"
import ProfileCard from "./ProfileCard"


const Swipe = ({queue, updateQueue, handleMatch, user}) => {
    
    const leftScreen = async (direction,id) => {
      if (direction === 'left' || direction === 'right') {
        let liked = false
        if (direction==='right') {
          liked = true
        }
        const res = await fetch(`/v1/swipe/${id}`, {
          method:'PUT',
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify({liked:liked})
        })
        const swipeResult = await res.json()
        updateQueue()

        if (swipeResult.match) {
          user.matches.push(swipeResult.match)
          handleMatch()
        } 

      }
    }


    const swiped = (dir) => {
    }

    return (
      <>
          <div className='tinder-cards'>
            {queue.map((profile) =>
              <TinderCard 
                  className='swipe' 
                  key={profile._id.toString()} 
                  onCardLeftScreen={(dir) => leftScreen(dir,profile._id.toString())}
                  onSwipe={(dir) => swiped(dir)} 
                  preventSwipe={["up", "down"]}>
                <div className="swipecard-border">
                <ProfileCard userProfile={profile} />
                </div>    
              </TinderCard>
            )}
          </div>
          {/* {lastDirection ? <h2 className='infoText'>You swiped {lastDirection}</h2> : <h2 className='infoText' />} */}

      </>
    )
  }
  
  export default Swipe

