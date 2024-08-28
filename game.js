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

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let humanChoice;

    const buttons = document.querySelectorAll("button");
    const results = document.querySelector("#results");

    function playRound(humanSelection, computerSelection) {
        results.textContent = `Player choice: ${humanSelection} | Computer choice: ${computerSelection}\n`;
    
        switch (true) {
            case humanSelection === computerSelection:
                results.textContent += "You're tied! Try again.\n";
                break
            case humanSelection === "rock" && computerSelection === "paper":
                results.textContent += "You lose! Paper beats Rock.\n";
                computerScore++;
                break
            case humanSelection === "paper" && computerSelection === "rock":
                results.textContent += "You win! Paper beats Rock.\n";
                humanScore++;
                break
            case humanSelection === "scissors" && computerSelection === "rock":
                results.textContent += "You lose! Rock beats scissors.\n";
                computerScore++;
                break
            case humanSelection === "rock" && computerSelection === "scissors":
                results.textContent += "You win! rock beats scissors.\n";
                humanScore++;
                break
            case humanSelection === "paper" && computerSelection === "scissors":
                results.textContent += "You lose! Scissors beats paper.\n";
                computerScore++;
                break
            case humanSelection === "scissors" && computerSelection === "paper":
                results.textContent += "You win! Scissors beats paper.\n";
                humanScore++;
                break
        }

        results.textContent += `Player score: ${humanScore} | Computer score: ${computerScore}`

        if (humanScore === 5) {
            results.textContent += "\nCONGRATULATIONS, YOU WIN THE GAME!";
            humanScore = 0;
            computerScore = 0;
        } else if (computerScore === 5) {
            results.textContent += "\nSORRY, YOU LOST THE GAME, TRY AGAIN";
            humanScore = 0;
            computerScore = 0;
        }
    }

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            humanChoice = button.id;

            playRound(humanChoice, getComputerChoice());
        })
    })
}

playGame();
