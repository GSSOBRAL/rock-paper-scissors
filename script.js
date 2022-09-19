const randomChoice = Math.floor((Math.random()) * 3);

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice(randomChoice);

playRound(computerSelection, playerSelection);

function getPlayerChoice(){
    const selection = prompt("Make a choice:");
    return selection.charAt(0).toUpperCase() + selection.slice(1).toLowerCase();
}

function getComputerChoice(computerChoice){
    let string;
    if(computerChoice === 0){
        string = "Rock";
        console.log(string);
        return string;
    }
    else if(computerChoice === 1){
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

function playRound(computerSelection, playerSelection){
    if(computerSelection === playerSelection)
        console.log("It's a draw!");
    else if(computerSelection === "Rock" && playerSelection === "Scissors")
        console.log("Computer wins! " + computerSelection + " beats " + playerSelection);
    else if(computerSelection === "Paper" && playerSelection === "Rock")
        console.log("Computer wins! " + computerSelection + " beats " + playerSelection);
    else if(computerSelection === "Scissors" && playerSelection === "Paper")
        console.log("Computer wins! " + computerSelection + " beats " + playerSelection);
    else if(computerSelection === "Rock" && playerSelection === "Paper")
        console.log("Player wins! " + playerSelection + " beats " + computerSelection);
    else if(computerSelection === "Scissors" && playerSelection === "Rock")
        console.log("Player wins! " + playerSelection + " beats " + computerSelection);
    else if(computerSelection === "Paper" && playerSelection === "Scissors")
        console.log("Player wins! " + playerSelection + " beats " + computerSelection);
    else
        console.log("Invalid Play");
}