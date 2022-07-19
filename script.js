const ROCK = "Rock";
const PAPER = "Paper";
const SCISSORS = "Scissors";
const CHOICES = [ROCK, PAPER, SCISSORS];
const GAME_ROUNDS = 5;

function getChoice(selection) {
    return CHOICES[selection];
}

function getComputerChoice() {
    return getChoice(Math.floor(Math.random() * 3));
}

function playRound(playerSelection, computerSelection) {
    let message;
    if (playerSelection === computerSelection) {
        message = "It's a tie!";
    } else {
        switch (playerSelection) {
            case ROCK:
                if (computerSelection === SCISSORS) {
                    message = "You win! Rock beats Scissors";
                } else {
                    message = "You lose! Paper beats Rock";
                }
                break;
            case PAPER:
                if (computerSelection === ROCK) {
                    message = "You win! Paper beats Rock";
                } else {
                    message = "You lose! Scissors beats Paper";
                }
                break;
            case SCISSORS:
                if (computerSelection === PAPER) {
                    message = "You win! Scissors beats Paper";
                } else {
                    message = "You lose! Rock beats Scissors";
                }
        }
    }
    return message;
}

function game() {
    let playerWinCount = 0;
    let computerWinCount = 0;
    for (let i = 0; i < GAME_ROUNDS; i++) {
        const userInput = prompt("Enter choice (rock: 0, paper: 1, scissors: 2): ");
        const playerSelection = getChoice(+userInput);
        const computerSelection = getComputerChoice();
        let message = playRound(playerSelection, computerSelection);
        if (message.includes("win")) {
            playerWinCount++;
        } else if (message.includes("lose")) {
            computerWinCount++;
        } else {
            playerWinCount++;
            computerWinCount++;
        }
        console.log(`Round ${i + 1}: ${message}`);
    }
    if (playerWinCount === computerWinCount) {
        console.log("It's a tie!");
    } else if (playerWinCount > computerWinCount) {
        console.log("You win!");
    } else {
        console.log("You lose!");
    }
}

game();
