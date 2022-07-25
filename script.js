const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;

buttons = document.querySelectorAll('.choices button');
let roundCounter = 1;

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    if (!gameOver()) {
      const playerSelection = parseInt(button.value);
      const computerSelection = getComputerChoice();
      const message = playRound(playerSelection, computerSelection);
      let roundResultMessage = `Round ${roundCounter}: ${message}`;
      const result = document.querySelector('#result');
      // winner is null if there is a tie
      const winner = determineWinner(message);
      let score = null;
      if (winner !== null) {
        score = updateScore(winner);
        if (score === 5) {
          roundResultMessage = winner === 'player'
                             ? 'You win! Refresh the page to restart'
                             : 'You lose! Refresh the page to restart';
        }
      }
      result.textContent = roundResultMessage;
      roundCounter++;
    }
  });
});

function updateScore(winner) {
  const scoreNode = document.querySelector(`.score #${winner}`);
  newScore = parseInt(scoreNode.textContent) + 1;
  scoreNode.textContent = newScore
  return newScore;
}

function gameOver() {
  const playerScore = document.querySelector('.score #player');
  const computerScore = document.querySelector('.score #computer');
  return parseInt(playerScore.textContent) === 5 
         || parseInt(computerScore.textContent) === 5;
}

function getComputerChoice() {
  return Math.floor(Math.random() * 3);
}

function determineWinner(message) {
  return message.includes('win') ? 'player'
         : message.includes('lose') ? 'computer'
         : null;
}

function playRound(playerSelection, computerSelection) {
  let message;
  if (playerSelection === computerSelection) {
    message = 'It\'s a tie!';
  } else {
    switch (playerSelection) {
      case ROCK:
        message = computerSelection === SCISSORS 
                ? 'You win! Rock beats Scissors'
                : 'You lose! Paper beats Rock';
        break;
      case PAPER:
        message = computerSelection === ROCK
                ? 'You win! Paper beats Rock'
                : 'You lose! Scissors beats Paper';
        break;
      case SCISSORS:
        message = computerSelection === PAPER
                ? 'You win! Scissors beats Paper'
                : 'You lose! Rock beats Scissors';
    }
  }
  return message;
}
