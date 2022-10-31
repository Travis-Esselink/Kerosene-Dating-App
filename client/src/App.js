import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css';

import LandingPage from './components/LandingPage';
import Simple from "./TestSwipe"

// Structure of Components:
// - LandingPage:
//  1. Header
//  2. SignInSignOutPopup

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
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/TestSwipe" element={<Simple />} />
      </Routes>
    </div>
  );
}

export default App;
