let playerWinCounter = 0;
let computerWinCounter = 0;

const buttons = document.querySelectorAll("button");
buttons.forEach(getPlayerChoice);

const result = document.querySelector(".results");

const playerWins = document.querySelector(".player-counter");
const computerWins = document.querySelector(".computer-counter");
playerWins.textContent = `Player: ${playerWinCounter}`;
computerWins.textContent = `Computer: ${computerWinCounter}`;
//game();

function getPlayerChoice(button){
    return button.addEventListener("click", () => {
        if(playerWinCounter < 5 && computerWinCounter < 5){
            playRound(getComputerChoice(), button.id);
            if(playerWinCounter === 5){
                result.textContent = "Player Wins!";
            }
            if(computerWinCounter === 5){
                result.textContent = "Player Loses!";
            }
            return button.id;
        }
        
    });
}

function getComputerChoice(){
    let string;
    const randomChoice = Math.floor((Math.random()) * 3);
    if(randomChoice === 0){
        string = "Rock";
        console.log(string);
        return string;
    }
    else if(randomChoice === 1){
        string = "Paper";
        console.log(string);
        return string;
    }
    else{
        string = "Scissors";
        console.log(string);
        return string;
    }
}
/*
function game(){
    for(let i = 0; i < 5; i++){
        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();
        playRound(computerSelection, playerSelection);
    }

    if(playerWinCounter > computerWinCounter)
        console.log("Congratulations! You are the Winner!")
    else if(computerWinCounter > playerWinCounter)
        console.log("Better luck next time! You are the Loser!")
    else
        console.log("It's a draw!")
}*/

function playRound(computerSelection, playerSelection){
    if(computerSelection === playerSelection)
        result.textContent = "It's a draw!";
    else if(computerSelection === "Rock" && playerSelection === "Scissors"){
        result.textContent = "You Lose! " + computerSelection + " beats " + playerSelection;
        computerWinCounter++;
    }
    else if(computerSelection === "Paper" && playerSelection === "Rock"){
        result.textContent = "You Lose! " + computerSelection + " beats " + playerSelection;
        computerWinCounter++;
    }
    else if(computerSelection === "Scissors" && playerSelection === "Paper"){
        result.textContent = "You Lose! " + computerSelection + " beats " + playerSelection;
        computerWinCounter++;
    }
    else if(computerSelection === "Rock" && playerSelection === "Paper"){
        result.textContent = "You Win! " + playerSelection + " beats " + computerSelection;
        playerWinCounter++;
    }
    else if(computerSelection === "Scissors" && playerSelection === "Rock"){
        result.textContent = "You Win! " + playerSelection + " beats " + computerSelection;
        playerWinCounter++;
    }
    else if(computerSelection === "Paper" && playerSelection === "Scissors"){
        result.textContent = "You Win! " + playerSelection + " beats " + computerSelection;
        playerWinCounter++;
    }
    else{
        console.log("Invalid Play");
        return "Invalid";
    }
    playerWins.textContent = `Player: ${playerWinCounter}`;
    computerWins.textContent = `Computer: ${computerWinCounter}`;
}