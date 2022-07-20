const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2
const GAME_ROUNDS = 5;

function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

function playRound(playerSelection, computerSelection) {
    let message;
    if (playerSelection === computerSelection) {
        message = "It's a tie!";
    } else {
        switch (playerSelection) {
            case ROCK:
                message = computerSelection === SCISSORS 
                        ? "You win! Rock beats Scissors"
                        : "You lose! Paper beats Rock";
                break;
            case PAPER:
                message = computerSelection === ROCK
                        ? "You win! Paper beats Rock"
                        : "You lose! Paper beats Rock";
                break;
            case SCISSORS:
                message = computerSelection === PAPER
                        ? "You win! Scissors beats Paper"
                        : "You lose! Rock beats Scissors";
        }
    }
    return message;
}

function game() {
    let playerWinCount = 0;
    let computerWinCount = 0;
    for (let i = 0; i < GAME_ROUNDS; i++) {
        const userInput = prompt("Enter choice (rock: 0, paper: 1, scissors: 2): ");
        const playerSelection = +userInput;
        const computerSelection = getComputerChoice();
        let message = playRound(playerSelection, computerSelection);
        if (message.includes("win")) {
            playerWinCount++;
        } else if (message.includes("lose")) {
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
