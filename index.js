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
    
//    make a reference to board  
const board = document.querySelector('.board')

// board has an event listener click.
board.addEventListener('click', function(event){
    console.log(event.target.id) // ---> will be a string representing the id of the element we click on
    let row = event.target.id[0] // ---> pulling the first character of the string, and putting it in a variable
    let col = event.target.id[2]   
    console.log({row, col})
    // 
    gameState.grid[row][col] = gameState.currentPlayer
     renderBoard()
    if (gameState.currentPlayer === 'x'){
        //html element update based on currentplayer
        gameState.currentPlayer = 'o'
    }
    else { 
        //html element update based on currentplayer
        gameState.currentPlayer = 'x'
    }
    console.log(gameState)

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
// function to check board for winner
    function checkBoard(){

    }

function updatePlayed() {
    //do some html-y-like stuff to new cell played
    
}
//  function for a restart button
const restartGame = 'Restart Game'
const restart = document.querySelector('.restart')
restart.addEventListener('click', handleRestart)
restart.innerText = restartGame