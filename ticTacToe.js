const gameState = {
  currentPlayer: "x",
  winner: null,
  // grid is a nested array
  grid: [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ],
};

function switchPlayer() {
  if (gameState.currentPlayer === "x") {
    //html element update based on currentplayer
    gameState.currentPlayer = "o";
  } else {
    //html element update based on currentplayer
    gameState.currentPlayer = "x";
  }
}
function checkRows() {
  for (let i = 0; i < gameState.grid.length; i++) {
    let currentRow = gameState.grid[i];
    if (currentRow[0] === currentRow[1] && currentRow[1] === currentRow[2]) {
      return currentRow[0];
    }
  }
  return false;
}
const checkColumns = () => {
  // for loop that loops through the game board.
  for (let i = 0; i < gameState.grid.length; i++) {
    for (let k = 0; k < gameState.grid.length; k++) {
      if (
        gameState.grid[0][k] === gameState.grid[1][k] &&
        gameState.grid[1][k] === gameState.grid[2][k]
      ) {
        return gameState.grid[0][k];
      }
    }
  }
  return false;
};

const checkDiagonal = () => {
  if (
    gameState.grid[0][0] === gameState.grid[1][1] &&
    gameState.grid[1][1] === gameState.grid[2][2]
  ) {
    return gameState.grid[0][0];
  } else if (
    gameState.grid[0][2] === gameState.grid[1][1] &&
    gameState.grid[1][1] === gameState.grid[2][0]
  ) {
    return gameState.grid[0][2];
  }
  return false;
};
const winningBoard = document.querySelector(".winner");
function checkWinner() {
  let toeWinner = `${gameState.currentPlayer} is the winner`;
  let draw = "draw";
  if (checkRows() === gameState.currentPlayer) {
    return toeWinner;
  } else if (checkColumns() === gameState.currentPlayer) {
    return toeWinner;
  } else if (checkDiagonal() === gameState.currentPlayer) {
    return toeWinner;
  }
  return draw;
}
function renderBoard() {
  for (let i = 0; i < gameState.grid.length; i++) {
    // for loop k is a nested loop in loop i.
    for (let k = 0; k < gameState.grid.length; k++) {
      let value = gameState.grid[i][k];
      let currentCell = document.getElementById(`${i},${k}`);
      //    currentCell using the innerText element to put our values on the board.
      currentCell.innerText = value;
    }
  }
}

const playerNames = document.getElementsByClassName(".names");
const board = document.querySelector(".board");

const restartGame = document.querySelector(".restart");
board.addEventListener("click", function (event) {
  //   console.log(event.target.id); // ---> will be a string representing the id of the element we click on
  let row = event.target.id[0]; // ---> pulling the first character of the string, and putting it in a variable
  let col = event.target.id[2];
  console.log({ row, col });
  gameState.grid[row][col] = gameState.currentPlayer;

  // calling renderBoard function this allows us to loop through the board.
  winningBoard.innerText = checkWinner();
  checkWinner();
  renderBoard();
  switchPlayer();
  // if statement that allows us to change current players
  // made a variable that connects to the playerTurn class in HTML
  let playerStatus = document.querySelector(".playerTurn");
  // PlayerStatus variable we created above to display who's turn it is based on gameState Current player.
  playerStatus.innerText = gameState.currentPlayer + "'s " + " Turn";
});
