// Selecting Elements
const playerOneBtn = document.querySelector("#p1Button");
const playerTwoBtn = document.querySelector("#p2Button");
const resetBtn = document.querySelector("#reset");
const playerOneDisplay = document.querySelector("#p1Display");
const playerTwoDisplay = document.querySelector("#p2Display");
const winningScoreSelect = document.querySelector("#playTo");

// Score Elements
let playerOneScore = 0;
let playerTwoScore = 0;
let winningScore = 5;
let GameOver = false;

// Updating score
playerOneBtn.addEventListener("click", function () {
  if (!GameOver) {
    playerOneScore += 1;
    if (playerOneScore === winningScore) {
      GameOver = true;
    }
    playerOneDisplay.textContent = playerOneScore;
  }
});
playerTwoBtn.addEventListener("click", function () {
  if (!GameOver) {
    playerTwoScore += 1;
    if (playerTwoScore === winningScore) {
      GameOver = true;
    }
    playerTwoDisplay.textContent = playerTwoScore;
  }
});
// Winning Score changer
winningScore.addEventListener("change", function () {
  winningScore = parseInt(this.value);
});

// Reset game score
resetBtn.addEventListener("click", reset);

function reset() {
  GameOver = false;
  playerOneScore = 0;
  playerTwoScore = 0;
  playerOneDisplay.textContent = 0;
  playerTwoDisplay.textContent = 0;
}
