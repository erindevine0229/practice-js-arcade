const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

const playerChoiceText = document.getElementById("player-choice");
const opponentChoiceText = document.getElementById("opponent-choice");
const resultText = document.getElementById("result-text");
const gameScore = document.getElementById("game-score");

let playerChoice;

const possibleChoices = document.querySelectorAll(".button");

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    playerChoice = e.target.id;
    playerChoiceText.textContent = playerChoice;
  })
);
