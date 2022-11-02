import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css';

import LandingPage from './components/LandingPage';
import EditProfile from "./components/EditProfile"
import Swipe from "./components/Swipe"
import Home from "./components/Home"
import Match from "./components/Match"

// Structure of Components:
// - LandingPage:
//  1. NavHeader
//  2. Login Modal
//  3. CreateAccount Modal

// - HOMEPAGE:
//    1. User's profile 
//      - Edit Profile
//      - Delete Profile
//    2. Logout button
//    3. Profiles for Swipe
//    4. Matched Profiles

// - Matched Profile:
//  1. Matched profile's details
//  2. Matched profile's chat convo


function App() {
  const [user,setUser] = useState()
  
  useEffect( () => {

    const getUser = async () => {
        const res = await fetch('/loggedin-user')
        const user = await res.json()
        setUser(user)

        
      }
      getUser()
  },[])


  return (
    <div className="App">
      <Routes>

        <Route path="/home/:tab" element = {<Home user={user}/>}/>
        <Route path="/home/matches/:id" element = {<Match />} />
        <Route path="/" user={user} element={<LandingPage />} />
        <Route path="/editprofile" element={<EditProfile />} />
        <Route path="/home" element = {<Home user={user}/>}/>

      </Routes>
    </div>
  );
}

export default App;
