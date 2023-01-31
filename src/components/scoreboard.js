import { app, db } from './firebase-config.js'
import { getFirestore, collection, getDocs, getDoc, doc, docs, setDoc, addDoc, limit, query, orderBy} from 'firebase/firestore'
import React, { useRef, useEffect, useState } from 'react'
import uniqid from "uniqid"

function Scoreboard() {
    const [leaderboard, setLeaderboard] = useState([])
    const [hasHappenedOnce, setHasHappenedOnce] = useState(false)
   

    

    useEffect(() => {

        if (hasHappenedOnce === false){
            async function getHighScores(){
                const leaderboardRef = collection(db, "leaderboard")
                const q = query(leaderboardRef, orderBy("hours"), orderBy("minutes"), orderBy("seconds"))
                const querySnapshot = await getDocs(q)
                setLeaderboard(querySnapshot.docs)
            }
                getHighScores()
                setHasHappenedOnce(true)
        }
        
    }, [leaderboard,hasHappenedOnce]) 
    
  
    

   return(
        <div className= "leaderboard">
            <div className="leaderboard-title">High Scores</div>
            <div className="leaderboard-list">
            <ol >
               {
                leaderboard.map((doc) => {
                    return <li key={uniqid()}>{doc.data().name}: {doc.data().hours} hours  {doc.data().minutes} minutes  {doc.data().seconds} seconds </li>
                })
               }
            </ol>
            </div>
            
        </div>
        )

    
    
        
        
            

}

export default Scoreboard