const gameState = {
    // players: ['x', 'o'],
    player1:['x'],
    player2:['o'],
    grid: [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ]
  }
  console.log(gameState.grid)
//   function for scoring for player 1
    function scoringX(){
    gameState.player1++
    }
    function scoringO(){
        let player2= 'o'
        player2++
    }
    
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
        // console.log(winningCombo)
// function for winning
function playerOne(grid, winningCombo ){
    let playerX1 = 'player X won'
    for(let i = 0; i < grid.length; i++ ){
        if(scoringX = winningCombo)
        return playerX1
    }
}
console.log(playerOne)

function playerTwo(grid, winningCombo){
    const playerO1 = 'Player O won'
for(let i = 0; i < grid.length; i++){
    if(scoringO = winningCombo)
    return playerO1
}
}
//     // gameScore function 
    
//     const board = document.querySelector('.board')
//    make a reference to board  

//    const button = document.createElement('button')
//     button.classList.add('X')
//     button.classList.add('O')
//     board.appendChild(button) 
    

//  add event listeners 
// gameState.addEventListener('click', function(evt)){

// }
// Display who's turn it is

// const displayBox = document.createElement('div')

// board.appendChild(displayBox)

// need to set up the computer score up


// need a reset button 

