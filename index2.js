// getting board element from Id board 
const board = document.getElementById('board')
// const variable named gameState with objects  
const gameState = {
  // computer object is equal to false
  computer: false,
  // current players object is equal to a string called X 
  currentPlayer: 'X',
  // winner object is equal to null
  winner: null,
  // board is an object with a nested array
  board: [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ],
}
// function called makeBoard 
function makeBoard() {
  // for loop that stops at 3.
  for (let i = 0; i < 3; i++) {
    // for loop that loops into our for loop above
    for (let j = 0; j < 3; j++) {
      // variable called cell that creates an element from div
      const cell = document.createElement('div')
      // add class to HTML called cell
      cell.classList.add('cell')
      // 
      cell.id = `${i}-${j}`
      // cell is a child to board
      board.appendChild(cell)
    }
  }
}
// call makeBoard function 
makeBoard()

// function called switchPlayers that will use to switch players
function switchPlayers() {
  // if statement that calls gameState's current player and sets it triple equal to X
  if (gameState.currentPlayer === 'X') {
    // if gameState currentPlayer is equal to X return o
    gameState.currentPlayer = 'O'
    // else statement that if gameState current player isn't equal to X return X
  } else {
    gameState.currentPlayer = 'X'
  }
}
// function called checkRows that we can use to check board
function checkRows() {
  // for loop that loops through the gameState board.
  for (let i = 0; i < gameState.board.length; i++) {
    // if statement stating if gameState board 0 and 1 equal and 1 equals 2 return gameState winner  
    if (
      gameState.board[i][0] === gameState.board[i][1] &&
      gameState.board[i][1] === gameState.board[i][2]
    ) {
      gameState.winner = gameState.board[i][0]
    }
  }
}
// function that check column sections
function checkCols() {
  // for loop that loops through the game board. 
  for (let i = 0; i < gameState.board.length; i++) {
    // if statement that checks if the columns equals each other and if so return gameState winner
    if (
      gameState.board[0][i] === gameState.board[1][i] &&
      gameState.board[1][i] === gameState.board[2][i]
    ) {
      gameState.winner = gameState.board[i][0]
    }
  }
}
// function that checks the game board diagonal
function checkDiag() {
  // if statement that checks if when the gameState equals 0,0, 1,1 and 2,2 return gameState winner 
  if (
    gameState.board[0][0] === gameState.board[1][1] &&
    gameState.board[1][1] === gameState.board[2][2]
  ) {
    gameState.winner = gameState.board[1][1]
    // else statement if 0,2, 1,1 2,0 equals each other return gameState 1,1  
  } else if (
    gameState.board[0][2] === gameState.board[1][1] &&
    gameState.board[1][1] === gameState.board[2][0]
  ) {
    gameState.winner = gameState.board[1][1]
  }
}
// check board function that calls all of the check board functions together. 
function checkBoard() {
  checkRows()
  checkCols()
  checkDiag()
}
// function that checks for a win
function checkWin() {
  // if statement that calls gameState.winner
  if (gameState.winner) {
    console.log(`${gameState.winner} wins the game!`)
  }
}
// function for play move by id with the 2 parameters  
function playMoveById(id, event) {
  // const row = parameter id at 0 array 
  const row = id[0]
  // const column equals parameter id at 2 array
  const column = id[2]
  // if statement that lets 
  if (gameState.board[row][column] === null) {
    gameState.board[row][column] = gameState.currentPlayer
    event.target.innerText = gameState.board[row][column]
  }
}

function handleClick(event) {
  const id = event.target.id
  playMoveById(id, event)
  switchPlayers()
  checkBoard()
  checkWin()
}

board.addEventListener('click', handleClick)
