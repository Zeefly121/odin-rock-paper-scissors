function getComputerChoice() {
    let number = Math.random() * 100;

    if (number <= 33) {
        return "rock";
    } else if (number > 33 && number <= 66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("What is your choice?").toLowerCase();

    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        return choice;
    } else {
        return console.log("Please check your spelling or enter a valid input.");
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanSelection, computerSelection) {
        console.log(`Player choice: ${humanSelection} | Computer choice: ${computerSelection}`);
    
        switch (true) {
            case humanSelection === computerSelection:
                console.log("You're tied! Try again.");
                break
            case humanSelection === "rock" && computerSelection === "paper":
                console.log("You lose! Paper beats Rock.");
                computerScore++;
                break
            case humanSelection === "paper" && computerSelection === "rock":
                console.log("You win! Paper beats Rock.");
                humanScore++;
                break
            case humanSelection === "scissors" && computerSelection === "rock":
                console.log("You lose! Rock beats scissors.");
                computerScore++;
                break
            case humanSelection === "rock" && computerSelection === "scissors":
                console.log("You win! rock beats scissors.");
                humanScore++;
                break
            case humanSelection === "paper" && computerSelection === "scissors":
                console.log("You lose! Scissors beats paper.");
                computerScore++;
                break
            case humanSelection === "scissors" && computerSelection === "paper":
                console.log("You win! Scissors beats paper.");
                humanScore++;
                break
        }
    }

    for (i = 0; i < 5; i++) {
        const computerSelection = getComputerChoice();
        const humanSelection = getHumanChoice();
        
        playRound(humanSelection, computerSelection);

        console.log(`Player score: ${humanScore} | Computer score: ${computerScore}`)
    }
}

playGame();
