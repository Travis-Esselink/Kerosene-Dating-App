import { Routes, Route } from 'react-router-dom'
import Simple from "./TestSwipe"
import Chat from './chatFolder/Chat'


import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/TestSwipe" element={<Simple />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </div>
  );
}

export default App;
