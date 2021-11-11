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

function tileClicked(tileNumber) {
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
}

currPlayer = "X";
gameState = Array(9).fill(null);
