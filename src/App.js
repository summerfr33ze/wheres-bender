
import './App.css';
import './gameboard.png'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import React, {useState, useEffect} from "react"
import TitleScreen from './components/title-screen.js'
import Gameboard from './components/gameboard.js'
import {Routes, Route, useNavigate} from 'react-router-dom'


const firebaseConfig = {
  apiKey: "AIzaSyAwvgOKHe2laRZF2ZmcyxYlkBvIgSYYthY",
  authDomain: "wheres-bender.firebaseapp.com",
  projectId: "wheres-bender",
  storageBucket: "wheres-bender.appspot.com",
  messagingSenderId: "13481502084",
  appId: "1:13481502084:web:f1292ad8e1cb2acbec29d1",
  measurementId: "G-08E6LPL64J"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  const navigate = useNavigate()
  const navigateToGameboard = () => { 
    navigate('/gameboard')
  }

  
  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<TitleScreen navigate={navigateToGameboard} />  } />
        <Route path="/gameboard" element={<Gameboard className="gameboard"  />}   />
      </Routes>
    </div>
  );
}

export default App;
