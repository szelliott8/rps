function loadButtons() {

    let btns= document.querySelectorAll(".choice");
    btns.forEach(btn =>{
        // choices.push(btn.textContent)
        // console.log(choices)  
        btn.addEventListener('click', playRound)
    })

}

function getComputerChoice(){
    let randomNumber = Math.floor(Math.random()*3);
    let computerChoice;
    console.log(randomNumber)
    if(randomNumber === 0) {
        computerChoice = 'rock'
        }
    else if (randomNumber===1) {
        computerChoice = 'papi'
    }
    else {

        computerChoice = 'sista'
    }
    return computerChoice;
}


function playRound(e) {
    let playerChoice = e.target.textContent.toLowerCase()
    let compChoice = getComputerChoice()
    console.log(`Computer Choice: ${compChoice}`)
    document.querySelector("#computer-result").textContent = compChoice
    console.log(`Player Choice: ${playerChoice}`)
    document.querySelector("#player-result").textContent = playerChoice
    if (compChoice === playerChoice){
        console.log("Draw")
    }
    else if (
        (compChoice ==='rock' && playerChoice === 'sista' ) ||
        (compChoice==='papi' && playerChoice==='rock') ||
        (compChoice ==='sista' && playerChoice==='papi')
        ) 
        {
            console.log("Loser!");
            increaseScore("Computer")
        }
        else {
            console.log("Winner / Gagnant");
            increaseScore("Player");
        }   
}

function playGame(){
    document.querySelector("#computer-score").textContent = 0;
    document.querySelector("#player-score").textContent = 0;
    playerScore = 0;
    computerScore = 0;
    return parseInt(prompt("How many games do you want to play"))
}


function increaseScore(winner) {

        if (winner === "Computer") {
            
        computerScore++;
        document.querySelector("#computer-score").textContent = computerScore
        }
        else {
            playerScore++
            document.querySelector("#player-score").textContent = playerScore
        }
        console.log(`Score: ${playerScore} : ${computerScore}`)
        if(computerScore ===gameLength || playerScore === gameLength) {
            let gameWinner = document.createElement('div')
            gameWinner.textContent = `GAME OVER: ${winner} won the game`
            document.body.appendChild(gameWinner);

            let restartBtn = document.createElement('button')
            restartBtn.textContent = "Play Again"
            restartBtn.addEventListener('click', (e)=> {restartGame(e,gameWinner)})
            document.body.appendChild(restartBtn)
            removeChoicesListeners();
            
        }
}

function restartGame(e,gameWinner) {
    
    console.log(e.target)
    document.body.removeChild(e.target)
    document.body.removeChild(gameWinner)
    document.querySelector("#computer-result").textContent = ""
    document.querySelector("#player-result").textContent = ""
    loadButtons();
    playGame();
    
}

function removeChoicesListeners() {

    let btns= document.querySelectorAll(".choice");
    console.log(btns)
    btns.forEach(btn =>{
        // choices.push(btn.textContent)
        // console.log(choices)  
        btn.removeEventListener('click', playRound)
    })

}
loadButtons();
let playerScore = 0;
let computerScore = 0;
let gameLength = playGame()

// playGame();



