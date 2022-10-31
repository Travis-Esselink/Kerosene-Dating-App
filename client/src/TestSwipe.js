import {useState} from "react"
import TinderCard from "react-tinder-card"

const db = [
    {
      name: 'Richard Hendricks',
      url: 'https://i.imgur.com/oPj4A8u.jpeg'
    },
    {
      name: 'Erlich Bachman',
      url: 'https://i.imgur.com/Q9WPlWA.jpeg'
    },
    {
      name: 'Monica Hall',
      url: 'https://i.imgur.com/MWAcQRM.jpeg'
    },
    {
      name: 'Jared Dunn',
      url: 'https://i.imgur.com/wDmRJPc.jpeg'
    },
    {
      name: 'Dinesh Chugtai',
      url: 'https://i.imgur.com/OckVkRo.jpeg'
    }
  ]
  
  function Simple () {
    const characters = db
    const [lastDirection, setLastDirection] = useState()
  
    const swiped = (direction, nameToDelete) => {
      console.log('removing: ' + nameToDelete)
      setLastDirection(direction)
    }
  
    const outOfFrame = (name) => {
      console.log(name + ' left the screen!')
    }
  
    return (
      <div>
        <link href='https://fonts.googleapis.com/css?family=Damion&display=swap' rel='stylesheet' />
        <link href='https://fonts.googleapis.com/css?family=Alatsi&display=swap' rel='stylesheet' />
        <h1>React Tinder Card</h1>
        <div className='cardContainer'>
          {characters.map((character) =>
            <TinderCard 
                className='swipe' 
                key={character.name} 
                onSwipe={(dir) => swiped(dir, character.name)} 
                onCardLeftScreen={() => outOfFrame(character.name)}
                preventSwipe={["up", "down"]}>
              <div style={{ backgroundImage: 'url(' + character.url + ')' }} className='card'>
                <h3>{character.name}</h3>
              </div>
            </TinderCard>
          )}
        </div>
        {lastDirection ? <h2 className='infoText'>You swiped {lastDirection}</h2> : <h2 className='infoText' />}
      </div>
    )
  }
  
  export default Simple