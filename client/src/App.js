import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Simple from "./TestSwipe"

import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/TestSwipe" element={<Simple />} />
      </Routes>
    </div>
  );
}

export default App;
