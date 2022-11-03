import { Routes, Route, Navigate } from 'react-router-dom'
import { useState, useEffect } from 'react'


import './App.css';

import Chat from './chatFolder/Chat'
import LandingPage from './components/LandingPage';
import EditProfile from "./components/EditProfile"
import Swipe from "./components/Swipe"
import Home from "./components/Home"
import Match from "./components/Match"
import PrivateAndSetUpRoute from './components/PrivateAndSetUpRoute'
import PrivateRoute from './components/PrivateRoute'
import Matches from "./components/Matches"



import UserProfile from "./components/UserProfile"
import Loading from "./components/Loading"

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
  const [user,setUser] = useState(null)
  
  useEffect( () => {

    const getUser = async () => {
        const res = await fetch('/loggedin-user')
        const user = await res.json()
        if (res.status === 200) {
        setUser(user)
      } else {
        setUser(null)
      }
    }
      getUser()
  },[])

  console.log(user?.displayName,'user in app')

  return (
    <div className="App">
      <Routes>

        <Route path="/" element={<LandingPage user={user} setUser={setUser} />} />
        
        <Route path="/home" element = {<PrivateAndSetUpRoute authorised={user}><Home user={user} setUser={setUser}/></PrivateAndSetUpRoute>}/>
        <Route path="/home/main" element = {<PrivateAndSetUpRoute authorised={user}><Home user={user} setUser={setUser}/></PrivateAndSetUpRoute>}/>
        <Route path="/home/matches" element = {<PrivateAndSetUpRoute authorised={user}><Matches user={user} setUser={setUser} /></PrivateAndSetUpRoute>}/>
        <Route path="/home/matches/:id" element = {<PrivateAndSetUpRoute authorised={user}><Match user={user}/></PrivateAndSetUpRoute>} />
        <Route path="/profile" element = {<PrivateAndSetUpRoute authorised={user}><UserProfile user={user} setUser={setUser}/></PrivateAndSetUpRoute>} />
        <Route path="/profile/edit" element={<PrivateRoute authorised={user}><EditProfile user={user} setUser={setUser} /></PrivateRoute>} />
        


      </Routes>
    </div>
  );
}

export default App;
