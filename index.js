// GameState is an object that contains our game grid and player values
const gameState = {
    playerX: 'x',
    player2: 'o',
    currentPlayer: 'x',
    // grid is a nested array
    grid: [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ]
}

// console.log gameState.grid to check if it works
// console.log(gameState.grid)
// console.log(gameState.grid[2][2])
const playerNames = document.getElementsByClassName('.names')
const board = document.querySelector('.board')
const winningBoard = document.querySelector('.winner')
const restartGame = document.querySelector('.restart')
board.addEventListener('click', function(event){
    console.log(event.target.id) // ---> will be a string representing the id of the element we click on
    let row = event.target.id[0] // ---> pulling the first character of the string, and putting it in a variable
    let col = event.target.id[2]   
    console.log({row, col})
    // 
    gameState.grid[row][col] = gameState.currentPlayer

    // calling renderBoard function this allows us to loop through the board.
        renderBoard()
        // if statement that allows us to change current players 
    if (gameState.currentPlayer === 'x'){
        //html element update based on currentplayer
        gameState.currentPlayer = 'o'
    }
    else { 
        //html element update based on currentplayer
        gameState.currentPlayer = 'x'
    }
    console.log(gameState)
    // made a variable that connects to the playerTurn class in HTML
    let playerStatus = document.querySelector('.playerTurn')
    // PlayerStatus variable we created above to display who's turn it is based on gameState Current player.
    playerStatus.innerText = gameState.currentPlayer + "'s " + " Turn"
    checkBoard()
})
// renderBoard function that loops through our gameState grid.

function renderBoard(){
    for(let i = 0; i < gameState.grid.length; i++){
        // for loop k is a nested loop in loop i.
        for(let k = 0; k < gameState.grid.length; k++){
            let value = gameState.grid[i][k]
            let currentCell = document.getElementById(`${i},${k}`)
            //    currentCell using the innerText element to put our values on the board.
            currentCell.innerText = value
        }
    }
}
// checkBoard for a winner function
function checkBoard(x = gameState.grid){
    for(let i = 0; i < gameState.grid.length; i++){
        for(let k = 0; k < gameState.grid[i]; k++){
            if(gameState.grid[i][k] = 'xxx'){
                return window.prompt('playerX is the winner')
        }
        }
    }
}
// restartGame.addEventListener('click', resetBoard(gameState.grid))
// // function to reset the board so we can play again
// function resetBoard(){
//     gameState.grid 
// }