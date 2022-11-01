import {useState} from "react"
import TinderCard from "react-tinder-card"


const Swipe = ({queue, setQueue, setNeedQueue, user}) => {
    let swipeCount = 0
    const [lastDirection, setLastDirection] = useState()

    const swiped = async (direction,id) => {
      setLastDirection(direction)
      swipeCount+=1

      console.log(queue.length,'queue length')
      console.log(swipeCount,'swipe count')
      let liked = false

      if (direction==='left') {
        liked = true
      }
      await fetch(`/v1/swipe/${id}`, {
        method:'PUT',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({liked:liked})
      })

      if (swipeCount+2 === queue.length) {

        console.log('setting need queue')
        setNeedQueue(Math.random()+Math.random())
      }
      //fetch for match,if metch, set show match function
    }
  
    console.log(queue,'chars ')
    return (
      <div>

        <h1>React Tinder Card</h1>
        <div className='card-container'>
          {queue.map((profile) =>
            <TinderCard 
                className='swipe' 
                key={profile._id.toString()} 
                onCardLeftScreen={(dir) => swiped(dir,profile._id.toString())} 
                preventSwipe={["up", "down"]}>
              <div style={{ backgroundImage: 'url(' + profile.coverImage + ')' }} className='card'>
                {/* <img src={profile.coverImage} /> make this a carousel */}
                <h3>{profile.displayName}</h3>
              </div>
            </TinderCard>
          )}
        </div>
        {lastDirection ? <h2 className='infoText'>You swiped {lastDirection}</h2> : <h2 className='infoText' />}
      </div>
    )
  }
  
  export default Swipe

