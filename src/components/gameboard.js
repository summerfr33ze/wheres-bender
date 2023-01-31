import background from "../gameboard.png"
import React, {useState, useEffect, useRef} from "react"
import { isBrowserExtension } from "@firebase/util"
import { getFirestore, collection, getDocs, getDoc, doc, docs, setDoc, addDoc, limit, query, } from 'firebase/firestore'
import { getAuth } from "firebase/auth"
import {app, db} from './firebase-config.js'

import Timer from './timer.js'





function Gameboard(props) {

    const dropDown = useRef(null)
    const fryButton = useRef(null)
    const hermesButton = useRef(null)
    const scruffyButton = useRef(null)

    const [cursorLeft, setCursorLeft] = useState("")
    const [cursorTop, setCursorTop] = useState("")
    const [hasPicBeenClicked, setHasPicBeenClicked] = useState(false)
    const [score, setScore] = useState(0)
    const [hasFryBeenClicked, setHasFryBeenClicked] = useState(false)
    const [hasHermesBeenClicked, setHasHermesBeenClicked] = useState(false)
    const [hasScruffyBeenClicked, setHasScruffyBeenClicked] = useState(false)

    const scruffy = doc(db, 'Character Coordinates/Scruffy')
    const hermes = doc(db, 'Character Coordinates/Hermes')
    const fry = doc(db, 'Character Coordinates/Fry')

    
    
        

    const setCurrentState = (event) => {
        setHasPicBeenClicked(true)
        setCursorLeft(event.clientX+window.scrollX)
        setCursorTop(event.clientY+window.scrollY)
        console.log(event.clientX+window.scrollX)
        console.log(event.clientY+window.scrollY)
    }

    async function handleCharacterOnClick (event) {
        event.stopPropagation()
        dropDown.current.style.display = "none"
        if (event.target.id === "scruffyButton" ){
            const docSnap = await getDoc(scruffy);
            if(docSnap.exists()) {
                if(cursorLeft > docSnap.data().Left && cursorLeft < docSnap.data().Right && cursorTop > docSnap.data().Top && cursorTop < docSnap.data().Bottom){
                    if (hasScruffyBeenClicked === false){
                        setScore(score + 1)
                    }
                    setHasScruffyBeenClicked(true)
                }
            } else {
                console.log("Document does not exist")
            }
        }
        if(event.target.id === "hermesButton"){
            const docSnap = await getDoc(hermes);
            if(docSnap.exists()) {
                if(cursorLeft > docSnap.data().Left && cursorLeft < docSnap.data().Right && cursorTop > docSnap.data().Top && cursorTop < docSnap.data().Bottom){
                    if(hasHermesBeenClicked === false){
                        setScore(score + 1)
                    }
                    setHasHermesBeenClicked(true)
                }
            } else {
                console.log("Document does not exist")
            }
        }
        if(event.target.id === "fryButton"){
            const docSnap = await getDoc(fry);
            if(docSnap.exists()) {
                if(cursorLeft > docSnap.data().Left && cursorLeft < docSnap.data().Right && cursorTop > docSnap.data().Top && cursorTop < docSnap.data().Bottom){
                    if(hasFryBeenClicked === false){
                        setScore(score + 1)
                    }
                    setHasFryBeenClicked(true)
                }
            } else {
                console.log("Document does not exist")
            }
        }
    }

    
    
    




    useEffect(() => {
        
        
        if(hasPicBeenClicked === false) {
            return
        }
        dropDown.current.style.display = "flex"
        dropDown.current.style.left = cursorLeft + 30 + "px"
        dropDown.current.style.top = cursorTop + 30 + "px"

    }, [cursorLeft,cursorTop,hasPicBeenClicked])

    return(
    
    <div className="gameboard" style={{ backgroundImage:`url(${background})`}} onClick={(event) => setCurrentState(event)}>
        <div className="drop-down" ref={dropDown} >
            <button className="character-choice" id="fryButton" ref={fryButton} onClick={(event) => handleCharacterOnClick(event)}>Phillip J Fry</button>
            <button className="character-choice" id="hermesButton" ref={hermesButton} onClick={(event) => handleCharacterOnClick(event)}>Hermes</button>
            <button className="character-choice" id="scruffyButton" ref={scruffyButton} onClick={(event) => handleCharacterOnClick(event)} >Scruffy</button>
        </div>
        <div className="score">Score: <span>{score}</span></div>
        <Timer score={score}/>
    </div>
    
    ) 
}


export default Gameboard