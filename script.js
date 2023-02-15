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
let winningScore = 3;
let GameOver = false;

// Updating score
playerOneBtn.addEventListener("click", function () {
  if (!GameOver) {
    playerOneScore += 1;
    if (playerOneScore === winningScore) {
      GameOver = true;
      playerOneDisplay.classList.add("has-text-success");
      playerTwoDisplay.classList.add("has-text-danger");
      playerOneBtn.disabled = true;
      playerTwoBtn.disabled = true;
    }
    playerOneDisplay.textContent = playerOneScore;
  }
});
playerTwoBtn.addEventListener("click", function () {
  if (!GameOver) {
    playerTwoScore += 1;
    if (playerTwoScore === winningScore) {
      GameOver = true;
      playerTwoDisplay.classList.add("has-text-success");
      playerOneDisplay.classList.add("has-text-danger");
      playerOneBtn.disabled = true;
      playerTwoBtn.disabled = true;
    }
    playerTwoDisplay.textContent = playerTwoScore;
  }
});
// Winning Score changer
winningScoreSelect.addEventListener("change", function () {
  winningScore = parseInt(this.value);
  reset();
});

// Reset game score
resetBtn.addEventListener("click", reset);

function reset() {
  GameOver = false;
  playerOneScore = 0;
  playerTwoScore = 0;
  playerOneDisplay.textContent = 0;
  playerTwoDisplay.textContent = 0;
  playerOneDisplay.classList.remove("has-text-success", "has-text-danger");
  playerTwoDisplay.classList.remove("has-text-success", "has-text-danger");
  playerOneBtn.disabled = false;
  playerTwoBtn.disabled = false;
}
