
import './App.css';
import './gameboard.png'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import React, {useState, useEffect} from "react"
import TitleScreen from './components/title-screen.js'
import Gameboard from './components/gameboard.js'
import Scoreboard from './components/scoreboard.js'
import {Routes, Route, useNavigate} from 'react-router-dom'
import { getFirestore, collection, getDocs, getDoc, doc, docs, setDoc, addDoc, limit, query, } from 'firebase/firestore'
import { getAuth } from "firebase/auth"


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
const db = getFirestore()
const analytics = getAnalytics(app);
const auth = getAuth(app);

function App() {
  const navigate = useNavigate()
  const navigateToGameboard = () => { 
    navigate('/gameboard')
  }
  const navigateToTitle = () => {
    navigate('/')
  }

  const navigateToScoreboard = () => {
    navigate('/scoreboard')
  }

  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<TitleScreen navigate={navigateToGameboard} navigate2={navigateToScoreboard} />} />
        <Route path="/gameboard" element={<Gameboard navigate={navigateToTitle}  />} />
        <Route path="/scoreboard" element={<Scoreboard navigate={navigateToTitle}/>} />
      </Routes>
    </div>
  );
}

export default App;
