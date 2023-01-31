import React, {useState, useEffect, useRef} from "react"
import { app, db } from './firebase-config.js'
import { getFirestore, collection, getDocs, getDoc, doc, docs, setDoc, addDoc, limit, query, } from 'firebase/firestore'

    function Timer(props) {

    const [sec, setSec] = useState(0)
    const  [min, setMin] = useState(0)
    const [hr, setHr] = useState(0)
    const [hasBeenPrompted, setHasBeenPrompted] = useState(false)
    const [isHighScore, setIsHighScore] = useState(false)

    async function getHighScores () {
    const querySnapshot = await getDocs(collection(db, "leaderboard"))
    querySnapshot.forEach(
        (doc) => { if((hr <= doc.data().hours && min <= doc.data().minutes && sec <= doc.data().seconds) || querySnapshot.length < 10) {
            setIsHighScore(true)
        }
        }
    )  
    }

    useEffect(() => {

        const interval = setInterval(()=> {
            if (props.score < 3){
                setSec(sec => sec + 1)
            if (sec == 59){
                setMin(min => min + 1)
                setSec(0)
            }
            if (min == 59){
                setHr(hr => hr + 1)
                setMin(0)
            }
            }

            else {
                getHighScores()
                if(setIsHighScore){
                    if (hasBeenPrompted === false){
                        setHasBeenPrompted(true)
                        let winner = prompt("You're in the Top Ten! Enter Your Name To Join The Leaderboard")
                        if (winner !== null) {
                            setDoc(doc(db, "leaderboard", `${winner}`), {
                                name: `${winner}`,
                                hours: `${hr}`,
                                minutes: `${min}`,
                                seconds: `${sec}`,
                            })
                        }
                    }
                
               
                
            }
        }
            
        }, 1000)

        return () => clearInterval(interval)
},[hr, min, sec, props.score,hasBeenPrompted,isHighScore, getHighScores])

    return (
        <div className="timer">
            <span className="hr">{hr + "hr"} </span>
            <span className="min">{min + "min"} </span>
            <span className="sec">{sec + "sec"}</span>
        </div>
    )
}

export default Timer