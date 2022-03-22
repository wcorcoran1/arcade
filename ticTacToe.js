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
  } else {
    for (let i = 0; i < gameState.grid.length; i++) {
      for (let k = 0; k < gameState.grid.length; k++) {
        if(gameState.grid[i][k] === null){
          draw = ' '
        }
      
      }
    }
  }
  return draw
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
  if(!gameState.grid[row][col]){
  gameState.grid[row][col] = gameState.currentPlayer
  switchPlayer();
  }
  winningBoard.innerText = checkWinner()
  // calling our renderBoard function
  renderBoard();
  // PlayerStatus variable we created above to display who's turn it is based on gameState Current player.
  playerStatus.innerText = gameState.currentPlayer + "'s " + " Turn";
})

const restartButton = document.getElementById('restartButton')
restartButton.addEventListener("click",function (event){
    gameState.currentPlayer = 'x' ;
    gameState.grid = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ]
    renderBoard();
  console.log("click")
});
// if statement player1
const name1 = document.getElementById('name1')
name1.addEventListener("input",function (event){
  let label1 = document.querySelector('label[for = "name1"]')
  if(event.target.value){
    label1.innerHTML = event.target.value
  } else {
    label1.innerHTML = 'Player1'
  }

} )
// if statement computer
const name2 = document.getElementById('name2')
name2.addEventListener("input",function (event){
  let label2 = document.querySelector('label[for = "name2"]')
  if(event.target.value){
    label2.innerHTML = event.target.value
  } else {
    label2.innerHTML = 'Computer'
  }
} )
