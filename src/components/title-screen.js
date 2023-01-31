import Fry from '../images/fry.png'
import Scruffy from '../images/scruffy.png'
import Hermes from '../images/hermes.png'

function TitleScreen (props){
return (
    <div className="title-screen">
        <div className="title">Welcome to Where's Fry!</div>
        <div className="summary">Your goal is to find Fry, Scruffy The Janitor and Hermes amongst every other Futurama character! Some characters appear multiple times throughout the picture. Click the version of the character that matches the below images.</div>
        <div className ="character-images">
            <img src={Fry}></img>
            <img src={Hermes}></img>
            <img src={Scruffy}></img>
        </div>
        <button className="start-game" onClick={props.navigate}>Play Game</button>
        <button className="to-scoreboard" onClick={props.navigate2} >Scoreboard</button>
    </div>
    
)
}

export default TitleScreen