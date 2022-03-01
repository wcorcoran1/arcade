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
//   function for scoring for player 1
    function scoringX(){
    let player1 = 'x'
        player1++
    }
    function scoringO(){
        let player2= 'o'
        player2++
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
    // const board = document.querySelector('.board')

//    const button = document.createElement('button')
    
    //board.appendChild(button) 

//  add event listeners 

// need to make game board set up for winners

// need to set up the computer score up

// need a reset button 

