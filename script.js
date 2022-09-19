let randomChoice = Math.floor((Math.random()) * 3);

getComputerChoice(randomChoice);

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