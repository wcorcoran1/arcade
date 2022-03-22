// gameState objects
const gameState = {
  currentPlayer: "x",
  // grid is a nested array
  grid: [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ],
};
// Connecting to our HTML Elements
const playerNames = document.getElementsByClassName(".names");
const board = document.querySelector(".board");
const restartGameButton = document.querySelector(".restart");
const winningBoard = document.querySelector(".winner");
let playerStatus = document.querySelector(".playerTurn");

// function that allows us to switch players
function switchPlayer() {
  if (gameState.currentPlayer === "x") {
    gameState.currentPlayer = "o";
  } else {
    gameState.currentPlayer = "x";
  }
}

// function that allows us to check our rows on the board
function checkRows() {
  for (let i = 0; i < gameState.grid.length; i++) {
    let currentRow = gameState.grid[i];
    if (currentRow[0] === currentRow[1] && currentRow[1] === currentRow[2]) {
      return currentRow[0];
    }
  }
  return false;
}

// function that checks our columns on the board
const checkColumns = () => {
  // two for loops that loop through the game board.
  for (let i = 0; i < gameState.grid.length; i++) {
    for (let k = 0; k < gameState.grid.length; k++) {
      // if statement stating that if column 0 equals column1 and column1 equals column 2
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

// function that checks our diagonal spaces on the game board
const checkDiagonal = () => {
  if (
    gameState.grid[0][0] === gameState.grid[1][1] &&
    gameState.grid[1][1] === gameState.grid[2][2]
  ) {
    return gameState.grid[0][0];
  } if (
    gameState.grid[0][2] === gameState.grid[1][1] &&
    gameState.grid[1][1] === gameState.grid[2][0]
  ) {
    return gameState.grid[0][2];
  }
  return false;
};

// function to check if we have a winner
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

// function that 

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

// putting it all together in an event listener
board.addEventListener("click", function (event) {
  let row = event.target.id[0]; // ---> pulling the first character of the string, and putting it in a variable
  let col = event.target.id[2];
  gameState.grid[row][col] = gameState.currentPlayer;
  
  /* GameState status that tells who is the winner and 
  has to place before checkWinner call in order to work*/
  winningBoard.innerText = checkWinner();
  // calling our functions
  switchPlayer();
  checkWinner();
  renderBoard();
  // PlayerStatus variable we created above to display who's turn it is based on gameState Current player.
  playerStatus.innerText = gameState.currentPlayer + "'s " + " Turn";
})

const cells = document.querySelector('.cell')
restartGameButton.addEventListener("click",function (event){
    cells.remove(gameState.currentPlayer) 
  console.log("click")
});