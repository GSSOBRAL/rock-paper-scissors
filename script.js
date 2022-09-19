game();

function getPlayerChoice(){
    const selection = prompt("Make a choice:");
    return selection.charAt(0).toUpperCase() + selection.slice(1).toLowerCase();
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

function game(){
    for(let i = 0; i < 5; i++){
        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();
        playRound(computerSelection, playerSelection);
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
    else{
        console.log("Invalid Play");
        return "Invalid";
    }
        
}