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

function determineWinner(playerWinCount, computerWinCount) {
    message = playerWinCount === computerWinCount ? "It's a tie!"
            : playerWinCount > computerWinCount ? "You win!"
            : "You lose!";
    return message; 
}

function game() {
    let playerWinCount = 0;
    let computerWinCount = 0;
    let round = 0;
    while (round < GAME_ROUNDS) {
        const userInput = prompt("Enter choice (rock: 0, paper: 1, scissors: 2): ");
        if (isNaN(userInput) || userInput === null || userInput.trim() === "") {
            console.log("user input must be an integer");
            continue;
        } else if (+userInput < 0 || +userInput > 2) {
            console.log("valid choices are only (rock: 0, paper: 1, scissors: 2)");
            continue;
        }
        const playerSelection = +userInput;
        const computerSelection = getComputerChoice();
        const message = playRound(playerSelection, computerSelection);
        if (message.includes("win")) {
            playerWinCount++;
        } else if (message.includes("lose")) {
            computerWinCount++;
        } 
        console.log(`Round ${round + 1}: ${message}`);
        round++;
    }
    console.log(determineWinner(playerWinCount, computerWinCount)); 
}

game();
