const gameState = {
    playerX: 'x',
    player2: 'o',
    currentPlayer: 'x',
    grid: [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ]
  }

// function for winning
function playerOne(grid, winningCombo ){
    let playerX1 = 'player X won'
    for(let i = 0; i < gameState.grid.length; i++ ){
        if(scoringX = winningCombo)
        return playerX1
    }
}

function playerTwo(grid, winningCombo){
    const playerO1 = 'Player O won'
for(let i = 0; i < gameState.grid.length; i++){
    if(scoringO = winningCombo)
    return playerO1
}
}
// function for draws
function noOneWins(){
        let draw = 'Draw'
       for(let i = 0; i < gameState.grid.length; i++){
        if(playerOne && playerTwo != winningCombo){
            return draw
        }
    }
}
//     // gameScore function 
    
//    make a reference to board  
const board = document.querySelector('.board')
// // created a button
//    const button = document.createElement('button')
//     button.classList.add('X')
//     button.classList.add('O')
//     board.appendChild(button) 
    

//  add event listeners 
board.addEventListener('click', function(event){
    console.log(event.target.id) // ---> will be a string representing the id of the element we click on
    let row = event.target.id[0] // ---> pulling the first character of the string, and putting it in a variable
    let col = event.target.id[2]
    console.log({row, col})
    gameState.grid[row][col] = gameState.currentPlayer
    // che
    if (gameState.currentPlayer == 'x'){
        //html element update based on currentplayer
        const currentPlayer =document.getElementsByClassName('.cell')
        

        gameState.currentPlayer = 'o'
    }
    else { 
        //html element update based on currentplayer
        gameState.currentPlayer = 'x'
    }
    console.log(gameState)

})
function updatePlayed() {
    //do some html-y-like stuff to new cell played
}
// Display who's turn it is
const displayBox = document.createElement('div')

board.appendChild(displayBox)