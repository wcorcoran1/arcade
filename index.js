// GameState is an object that contains our game grid and player values
const gameState = {
  playerX: "x",
  player2: "o",
  currentPlayer: "x",
  winner: null,
  // grid is a nested array
  grid: [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ],
};

function checkWinner() {
  let toeWinner = `${gameState.currentPlayer} is the winner`;
  let draw = 'draw'
  if (checkRows() === gameState.currentPlayer) {
    return toeWinner;
  } else if (checkColumns() === gameState.currentPlayer) {
    return toeWinner;
  } else if (checkDiagonal() === gameState.currentPlayer) {
    return toeWinner;
  }
  console.log(checkColumns())
  console.log(checkRows())
  return false;
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
//     if (k === 0) {
  //       column1.push(currentElement);
  //     } else if (k=== 1) {
  //       column2.push(currentElement);
  //     } else k === 2;
  //     column3.push(currentElement);
  //   }
  // }
// 0,0 1,0 2,0

const checkColumns = () => {
  let column1 = [];
  let column2 = [];
  let column3 = [];

  for (let i = 0; i < gameState.grid.length; i++) {
    for (let k = 0; k < gameState.grid.length; k++) {
      let currentElement = gameState.grid[k];
      if(currentElement[0] === currentElement[1] && currentElement[1] === currentElement[2]){
        return currentElement[1]
      }
    }
    return false;
  }
}

// 0,0, 1,1 2,2 || 0,2 1,1, 2,0
const checkDiagonal = () => {
  let diagonal1 = [];
  let diagonal2 = [];

  for (let i = 0; i < gameState.grid.length; i++) {
    for (let k = 0; k < gameState.grid.length; k++) {
      let currentElem = gameState.grid[i][k];
      if ((i, k === 0 && i, k === 1 && i, k === 2)) {
        diagonal1.push(currentElem);
      }
      if (i) {
      }
    }
  }
  return false;
};
function switchPlayer(){

  if (gameState.currentPlayer === "x") {
    //html element update based on currentplayer
    gameState.currentPlayer = "o";
  } else {
    //html element update based on currentplayer
    gameState.currentPlayer = "x";
  }
}
// console.log gameState.grid to check if it works
// console.log(gameState.grid)
// console.log(gameState.grid[2][2])
const playerNames = document.getElementsByClassName(".names");
const board = document.querySelector(".board");
const winningBoard = document.querySelector(".winner");
const restartGame = document.querySelector(".restart");
board.addEventListener("click", function (event) {
  console.log(event.target.id); // ---> will be a string representing the id of the element we click on
  let row = event.target.id[0]; // ---> pulling the first character of the string, and putting it in a variable
  let col = event.target.id[2];
  console.log({ row, col });
  //
  gameState.grid[row][col] = gameState.currentPlayer;

  // calling renderBoard function this allows us to loop through the board.
  checkWinner();
  console.log(checkWinner());
  renderBoard();
  switchPlayer()
  // if statement that allows us to change current players
  console.log(gameState);
  // made a variable that connects to the playerTurn class in HTML
  let playerStatus = document.querySelector(".playerTurn");
  // PlayerStatus variable we created above to display who's turn it is based on gameState Current player.
  playerStatus.innerText = gameState.currentPlayer + "'s " + " Turn";
});

// renderBoard function that loops through our gameState grid.

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
