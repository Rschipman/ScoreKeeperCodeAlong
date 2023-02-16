// Player One Object
const playerOne = {
  score: 0,
  button: document.querySelector("#p1Button"),
  display: document.querySelector("#p1Display"),
};

// Player Two Object
const playerTwo = {
  score: 0,
  button: document.querySelector("#p2Button"),
  display: document.querySelector("#p2Display"),
};

// Selecting Elements
const resetBtn = document.querySelector("#reset");
const winningScoreSelect = document.querySelector("#playTo");
let winningScore = 3;
let GameOver = false;

// Updating score
function updateScore(player, opponent) {
  if (!GameOver) {
    player.score += 1;
    if (player.score === winningScore) {
      GameOver = true;
      player.display.classList.add("has-text-success");
      opponent.display.classList.add("has-text-danger");
      player.button.disabled = true;
      opponent.button.disabled = true;
    }
  }
  player.display.textContent = player.score;
}

playerOne.button.addEventListener("click", function () {
  updateScore(playerOne, playerTwo);
});

playerTwo.button.addEventListener("click", function () {
  updateScore(playerTwo, playerOne);
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
  for (let p of [playerOne, playerTwo]) {
    p.score = 0;
    p.display.textContent = 0;
    p.display.classList.remove("has-text-success", "has-text-danger");
    p.button.disabled = false;
  }
}
