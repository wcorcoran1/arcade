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
const board = document.querySelector('.board')
const winningBoard = document.querySelector('.winner')
board.addEventListener('click', function(event){
    console.log(event.target.id) // ---> will be a string representing the id of the element we click on
    let row = event.target.id[0] // ---> pulling the first character of the string, and putting it in a variable
    let col = event.target.id[2]   
    console.log({row, col})
    // 
    gameState.grid[row][col] = gameState.currentPlayer

    // calling renderBoard function this allows us to loop through the board.
        renderBoard()
        checkBoard()
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
    // console.log(gameState.grid[0][0])
    // console.log(gameState.grid[2][2])
    // console.log(gameState.currentPlayer)
    let playerStatus = document.querySelector('.playerTurn')
    playerStatus.innerText = gameState.currentPlayer + "'s" + ' ' + 'Turn'
    
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
            // player Status displays who moved last on the screen by using innerText to on current player.
        }
    }
}
// checkBoard for a winner function
function checkBoard(){
    if(gameState.grid[0][0] == gameState.currentPlayer){
        if(gameState.grid[0][1] && gameState.grid[0][2] == gameState.currentPlayer){
            return true;
        } else if (gameState.grid[2][0] && gameState.grid[1][0] == gameState.currentPlayer){
            return true;
        } else if(gameState.grid[1][1] && gameState.grid[2][2] == gameState.currentPlayer){
            return true;
        }
    }
}

