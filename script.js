const ROCK = "Rock";
const PAPER = "Paper";
const SCISSORS = "Scissors";
const CHOICES = [ROCK, PAPER, SCISSORS];

function getChoice(selection) {
    return CHOICES[selection]
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

const playerSelection = getChoice(0);
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

