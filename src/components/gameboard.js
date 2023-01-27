import background from "../gameboard.png"
import React, {useState, useEffect, useRef} from "react"
import { isBrowserExtension } from "@firebase/util"



function Gameboard(props) {

    const dropDown = useRef(null)
    const fryButton = useRef(null)
    const hermesButton = useRef(null)
    const scruffyButton = useRef(null)

    const [cursorLeft, setCursorLeft] = useState("")
    const [cursorTop, setCursorTop] = useState("")
    const [hasPicBeenClicked, setHasPicBeenClicked] = useState(false)
    const [score, setScore] = useState(0)
    

    const setCurrentState = (event) => {
        setHasPicBeenClicked(true)
        setCursorLeft(event.clientX+window.scrollX+"px")
        setCursorTop(event.clientY+window.scrollY+"px")
        console.log(event.clientX+window.scrollX+"px")
        console.log(event.clientY+window.scrollY+"px")
    }

    const handleCharacterOnClick = (event) => {
        event.stopPropagation()
        
        if (event.target.id === "scruffyButton" ){
            if(parseInt(cursorLeft) > 1450 && parseInt(cursorLeft) < 1570 && parseInt(cursorTop) > 2690 && parseInt(cursorTop) < 2890){
                setScore(score + 1)
            }
        }
        if(event.target.id === "amyButton"){
            if(parseInt(cursorLeft) > 4060 && parseInt(cursorLeft) < 4200 && parseInt(cursorTop) > 1310 && parseInt(cursorTop) < 1520){
                setScore(score + 1)
            }
        }
        if(event.target.id === "benderButton"){
            if(parseInt(cursorLeft) > 1330 && parseInt(cursorLeft) < 1430 && parseInt(cursorTop) > 630 && parseInt(cursorTop) < 820){
                setScore(score + 1)
            }
        }
    }



    useEffect(() => {
        
        if(hasPicBeenClicked === false) {
            return
        }
        dropDown.current.style.display = "flex"
        dropDown.current.style.left = cursorLeft
        dropDown.current.style.top = cursorTop
    }, [cursorLeft,cursorTop,hasPicBeenClicked])

    return(
    
    <div className="gameboard" style={{ backgroundImage:`url(${background})`}} onClick={(event) => setCurrentState(event)}>
        <div className="drop-down" ref={dropDown} >
            <button className="character-choice" id="fryButton" ref={fryButton} onClick={(event) => handleCharacterOnClick(event)}>Phillip J Fry</button>
            <button className="character-choice" id="hermesButton" ref={hermesButton} onClick={(event) => handleCharacterOnClick(event)}>Hermes</button>
            <button className="character-choice" id="scruffyButton" ref={scruffyButton} onClick={(event) => handleCharacterOnClick(event)} >Scruffy</button>
        </div>
        <div className="score">Score: <span>{score}</span></div>
        
    </div>
    
    ) 
}


export default Gameboard