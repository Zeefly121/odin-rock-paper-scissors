let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let number = Math.random() * 100;

    if (number <= 33) {
        return "Rock";
    } else if (number > 33 && number <= 66) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("What is your choice? (1 = Rock, 2 = Paper, 3 = Scissors)").toLowerCase();

    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        return console.log(choice);
    } else {
        return console.log("Please check your spelling or enter a valid input.");
    }
}
