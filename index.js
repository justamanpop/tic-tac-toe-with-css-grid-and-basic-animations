function changeCurrPlayer() {
  let x = document.getElementsByClassName("playerX")[0];
  let o = document.getElementsByClassName("playerO")[0];

  if (x.className.includes("currPlayer")) {
    x.classList.remove("currPlayer");
    o.classList.add("currPlayer");
    currPlayer = "O";
  } else {
    o.classList.remove("currPlayer");
    x.classList.add("currPlayer");
    currPlayer = "X";
  }
}

function checkRows() {
  if (
    gameState[0] != null &&
    gameState[1] != null &&
    gameState[2] != null &&
    gameState[0] === gameState[1] &&
    gameState[1] === gameState[2]
  ) {
    winner = gameState[0];
    return true;
  }

  if (
    gameState[3] != null &&
    gameState[4] != null &&
    gameState[5] != null &&
    gameState[3] === gameState[4] &&
    gameState[4] === gameState[5]
  ) {
    winner = gameState[3];
    return true;
  }

  if (
    gameState[6] != null &&
    gameState[7] != null &&
    gameState[8] != null &&
    gameState[6] === gameState[7] &&
    gameState[7] === gameState[8]
  ) {
    winner = gameState[6];
    return true;
  }
  return false;
}

function checkColumns() {
  if (
    gameState[0] != null &&
    gameState[3] != null &&
    gameState[6] != null &&
    gameState[0] === gameState[3] &&
    gameState[3] === gameState[6]
  ) {
    winner = gameState[0];
    return true;
  }

  if (
    gameState[1] != null &&
    gameState[4] != null &&
    gameState[7] != null &&
    gameState[1] === gameState[4] &&
    gameState[4] === gameState[7]
  ) {
    winner = gameState[1];
    return true;
  }

  if (
    gameState[2] != null &&
    gameState[5] != null &&
    gameState[8] != null &&
    gameState[2] === gameState[5] &&
    gameState[5] === gameState[8]
  ) {
    winner = gameState[2];
    return true;
  }
  return false;
}

function checkDiagonals() {
  if (
    gameState[0] != null &&
    gameState[4] != null &&
    gameState[8] != null &&
    gameState[0] === gameState[4] &&
    gameState[4] === gameState[8]
  ) {
    winner = gameState[0];
    return true;
  }

  if (
    gameState[2] != null &&
    gameState[4] != null &&
    gameState[6] != null &&
    gameState[2] === gameState[4] &&
    gameState[4] === gameState[6]
  ) {
    winner = gameState[2];
    return true;
  }
  return false;
}

function restartGame() {
  location.reload();
}

function changeGameStatusMessage() {
  document.getElementsByClassName("playerX")[0].style.visibility = "hidden";
  document.getElementsByClassName("playerO")[0].style.visibility = "hidden";

  let gameOverMessageElement =
    document.getElementsByClassName("gameOverMessage")[0];
  let playAgainButtonElement =
    document.getElementsByClassName("playAgainButton")[0];

  if (winner === "tie") {
    gameOverMessageElement.innerHTML = "The game is a tie!";
  } else gameOverMessageElement.innerHTML = winner + " has won the game!";

  gameOverMessageElement.style.visibility = "visible";
  playAgainButtonElement.style.visibility = "visible";
}

function checkGameOver() {
  if (checkRows() || checkColumns() || checkDiagonals()) {
    isGameOver = true;
    for (let i = 1; i < 10; i++) {
      document.getElementsByClassName(
        "ticTacToeSquare" + i.toString()
      )[0].style.cursor = "auto";
    }

    if (!gameState.includes(null)) {
      isGameOver = true;
      winner = "tie";
    }

    changeGameStatusMessage();
  }
}

function tileClicked(tileNumber) {
  if (isGameOver || gameState[tileNumber - 1] !== null) return;

  let className = "hidden" + currPlayer + tileNumber.toString();
  let hiddenElement = document.getElementsByClassName(className)[0];
  hiddenElement.style.visibility = "visible";

  if (tileNumber === 1 || tileNumber === 4 || tileNumber === 7)
    hiddenElement.classList.add("moveRight");
  else if (tileNumber === 3 || tileNumber === 6 || tileNumber === 9)
    hiddenElement.classList.add("moveLeft");
  else {
    if (currPlayer === "X") hiddenElement.classList.add("moveLeft");
    else hiddenElement.classList.add("moveRight");
  }

  gameState[tileNumber - 1] = currPlayer;
  changeCurrPlayer();
  checkGameOver();
}

currPlayer = "X";
gameState = Array(9).fill(null);
isGameOver = false;
winner = null;
