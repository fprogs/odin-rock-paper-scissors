const CHOICES = ["Rock", "Paper", "Scissors"];

function getChoice(selection) {
    return CHOICES[selection]
}

function getComputerChoice() {
    return getChoice(Math.floor(Math.random() * 3));
}


