const playerChoiceText = document.getElementById("player-choice");
const opponentChoiceText = document.getElementById("opponent-choice");
const resultText = document.getElementById("result-text");
const gameScore = document.getElementById("game-score");

let playerChoice;
let opponentChoice;
let result = "";

const possibleChoices = document.querySelectorAll(".button");

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    playerChoice = e.target.id;
    playerChoiceText.textContent = playerChoice;
    generateOpponentChoice();
    determineResult();
  })
);

const generateOpponentChoice = () => {
  const randomValue = Math.floor(Math.random() * possibleChoices.length);

  if (randomValue === 0) {
    opponentChoice = "Rock";
  } else if (randomValue === 1) {
    opponentChoice = "Scissors";
  } else if (randomValue === 2) {
    opponentChoice = "Paper";
  }
  opponentChoiceText.innerHTML = opponentChoice;
};

const determineResult = () => {
  if (playerChoice === opponentChoice) {
    result = "It's a tie!";
  } else if (playerChoice === "Rock" && opponentChoice === "Paper") {
    result = "Opponent has won!";
  } else if (playerChoice === "Rock" && opponentChoice === "Scissors") {
    result = "You have won!";
  } else if (playerChoice === "Paper" && opponentChoice === "Scissors") {
    result = "Opponent has won!";
  } else if (playerChoice === "Paper" && opponentChoice === "Rock") {
    result = "You have won!";
  } else if (playerChoice === "Scissors" && opponentChoice === "Rock") {
    result = "Opponent has won!";
  } else if (playerChoice === "Scissors" && opponentChoice === "Paper") {
    result = "You have won!";
  }
  resultText.innerHTML = result;
};
