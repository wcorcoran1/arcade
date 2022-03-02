const gameState = {
    // players: ['x', 'o'],
    player1:'x',
    player2:'o',
    grid: [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ]
  }

//   function for scoring for player 1
    // function scoringX(){
    // gameState.player1++
    // }
    // function scoringO(){
    //     gameState.player2++
    // }
    
    // winning combo
    const winningCombo = 
        [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]]
      
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
    gameState.grid[row][col] = 'x' 
    console.log(gameState.grid)

})
// Display who's turn it is
const displayBox = document.createElement('div')

board.appendChild(displayBox)