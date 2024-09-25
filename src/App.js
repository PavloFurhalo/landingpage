import React, { useState } from 'react';
import Header from './components/Header';
import Login from './components/Login';
import Register from './components/Register';
import './App.css';

function App() {
  const [isRegister, setIsRegister] = useState(false);
  const [isPopup, setIsPopup] = useState(false);

  return (
    <div className="App">
      <Header setIsPopup={setIsPopup} />
      <div className={`wrapper ${isPopup ? 'active-popup' : ''} ${isRegister ? 'active' : ''}`}>
        <span className="icon-close" onClick={() => setIsPopup(false)}>&times;</span>
        <Login setIsRegister={setIsRegister} />
        <Register setIsRegister={setIsRegister} />
      </div>
    </div>
  );
}

export default App;
