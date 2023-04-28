function getComputerChoice(){
    let randomNumber = Math.floor(Math.random()*3);
    let computerChoice;
    console.log(randomNumber)
    if(randomNumber === 0) {
        computerChoice = 'rock'
        }
    else if (randomNumber===1) {
        computerChoice = 'paper'
    }
    else {

        computerChoice = 'scissors '
    }
    return computerChoice;
}

function getPlayerChoice() {
    let playerChoice = prompt("Choose Rock, Paper, or Scissors").toLowerCase();

    if(playerChoice != 'rock' && 
        playerChoice !='paper' && 
        playerChoice !='scissors') 
        {
        console.log('Invalid Entry')
        getPlayerChoice();
    }
    else {
        return playerChoice
    }
}

function playGame(compChoice, playerChoice) {
    console.log(`Computer Choice: ${compChoice}`)
    console.log(`Player Choice: ${playerChoice}`)
    if (compChoice === playerChoice){
        console.log("Draw")
    }
    else if ((compChoice ==='rock' && playerChoice === 'scissors' )||
        (compChoice==='paper' && playerChoice==='rock')||
        (compChoice ==='scissors' && playerChoice==='paper')) {
            console.log("Loser!")
        }
        else(
            console.log("Winner / Gagnant")
        )
    
}
playGame(getComputerChoice(),getPlayerChoice())

