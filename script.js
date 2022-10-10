let playerWinCounter = 0;
let computerWinCounter = 0;

const buttons = document.querySelectorAll("button");
buttons.forEach(getPlayerChoice);

//game();

function getPlayerChoice(button){
    return button.addEventListener("click", () => {
        playRound(getComputerChoice(), button.id);
        return button.id;
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
        console.log("It's a draw!");
    else if(computerSelection === "Rock" && playerSelection === "Scissors"){
        console.log("You Lose! " + computerSelection + " beats " + playerSelection);
        computerWinCounter++;
    }
    else if(computerSelection === "Paper" && playerSelection === "Rock"){
        console.log("You Lose! " + computerSelection + " beats " + playerSelection);
        computerWinCounter++;
    }
    else if(computerSelection === "Scissors" && playerSelection === "Paper"){
        console.log("You Lose! " + computerSelection + " beats " + playerSelection);
        computerWinCounter++;
    }
    else if(computerSelection === "Rock" && playerSelection === "Paper"){
        console.log("You Win! " + playerSelection + " beats " + computerSelection);
        playerWinCounter++;
    }
    else if(computerSelection === "Scissors" && playerSelection === "Rock"){
        console.log("You Win! " + playerSelection + " beats " + computerSelection);
        playerWinCounter++;
    }
    else if(computerSelection === "Paper" && playerSelection === "Scissors"){
        console.log("You Win! " + playerSelection + " beats " + computerSelection);
        playerWinCounter++;
    }
    else{
        console.log("Invalid Play");
        return "Invalid";
    }
        
}