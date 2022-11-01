import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css';

import LandingPage from './components/LandingPage';
import Simple from "./TestSwipe"
import EditProfile from "./components/EditProfile"

// Structure of Components:
// - LandingPage:
//  1. Header
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
  const [user, setUser] = useState(null)

  return (
    <div className="App">
      <Routes>
        <Route path="/" user={user} element={<LandingPage />} />
        <Route path="/TestSwipe" element={<Simple />} />
        <Route path="/editprofile" element={<EditProfile />} />
      </Routes>
    </div>
  );
}

export default App;
