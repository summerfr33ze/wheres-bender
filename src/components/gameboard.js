import background from "../gameboard.png"

const handleGameboardOnClick = (event) =>{
    //select gameboard element and create elements to target characters
    const gameboard = document.querySelector(".gameboard")
    const targetCircle = document.createElement("div")
    const dropDown = document.createElement("div")
    

    //apply classes to targeting elements
    targetCircle.className = "target-circle"
    dropDown.className= "drop-down"

    //make targeting elements appear where mouse is clicked
    targetCircle.style.left = event.clientX+"px"
    targetCircle.style.top = event.clientY+"px"
    dropDown.style.left = event.clientX+200+"px"
    dropDown.style.top = event.clientY+50+"px"

    //append targeting elements to gameboard
    gameboard.appendChild(targetCircle)
    gameboard.appendChild(dropDown)
    const benderButton = document.createElement("button")
    benderButton.className = "character-choice"
    benderButton.textContent = "Bender 'Bending' Rodriguez"
    dropDown.appendChild(benderButton)
    const amyButton = document.createElement("button")
    amyButton.className = "character-choice"
    amyButton.textContent = "Amy Wong"
    dropDown.appendChild(amyButton)
    const scruffyButton = document.createElement("button")
    scruffyButton.className = "character-choice"
    scruffyButton.textContent= "Scruffy The Janitor"
    dropDown.appendChild(scruffyButton)
  
  
  }

function Gameboard(props) {
    return(
    
    <div className="gameboard" style={{ backgroundImage:`url(${background})`}} onClick={event => handleGameboardOnClick(event)}>
        <div className="bender"></div>
        <div className="amy"></div>
        <div className="scruffy"></div>
    </div>
    
    ) 
}


export default Gameboard