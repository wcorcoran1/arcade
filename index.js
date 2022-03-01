const gameState = {
    // players: ['x', 'o'],
    player1:['x'],
    player2:['o'],
    grid: [
      [b1, b2, b3],
      [b4, b5, b6],
      [b7, b8, b9]
    ]
  }
    function scoring(){
        for(let i = 0; i < grid.length; i++){

        }
    }
//   function that gets player 1 winning 
  function winning(grid){
       let playerOne = 'Player 1 Won'
    if((gameState.b1 = gameState.player1) && (gameState.b2 = gameState.player1) && (gameState.b3 = gameState.player1)) {
        return playerOne
    } 
    if((gameState.b1 = gameState.player1) && (gameState.b5 = gameState.player1) && (gameState.b9 = gameState.player1)){
        return playerOne
    }
    console.log(playerOne)
   }

   
    // gameScore function 

//   make 
    const board = document.querySelector('.board')

    
//   add event listeners 


// need to make game board set up for winners

// need to set up the computer score up

