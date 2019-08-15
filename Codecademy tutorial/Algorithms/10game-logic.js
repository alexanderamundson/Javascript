let playerOneMoveOneType = undefined;
let playerOneMoveTwoType = undefined; 
let playerOneMoveThreeType = undefined;
let playerTwoMoveOneType = undefined; 
let playerTwoMoveTwoType = undefined;
let playerTwoMoveThreeType = undefined;
let playerOneMoveOneValue = undefined;
let playerOneMoveTwoValue = undefined; 
let playerOneMoveThreeValue = undefined;
let playerTwoMoveOneValue = undefined; 
let playerTwoMoveTwoValue = undefined;
let playerTwoMoveThreeValue = undefined;


function setPlayerMoves(player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) {
    if (player === 'Player One') {
         playerOneMoveOneType = moveOneType;
         playerOneMoveTwoType = moveTwoType; 
         playerOneMoveThreeType = moveThreeType;
         playerOneMoveOneValue = moveOneValue;
         playerOneMoveTwoValue = moveTwoValue; 
         playerOneMoveThreeValue = moveThreeValue;
    } 
    if (player === 'Player Two'){
        playerTwoMoveOneType = moveOneType;
        playerTwoMoveTwoType = moveTwoType; 
        playerTwoMoveThreeType = moveThreeType;
        playerTwoMoveOneValue = moveOneValue;
        playerTwoMoveTwoValue = moveTwoValue; 
        playerTwoMoveThreeValue = moveThreeValue;
    }
}

function getRoundWinner(roundNumber) {
    //Round == 1
    if (roundNumber === 1) {
      return roundOneWinner();
    }
    //Round = 2
    if (roundNumber === 2) {
        return roundTwoWinner();
    }
    //Round = 3
    if (roundNumber === 3) {
        return roundThreeWinner();
      }
}

function roundOneWinner() {
    //Same move type
    if (playerOneMoveOneType === playerTwoMoveOneType) {
        return sameMoveTypeWinnerRoundOne();
      }

      //Different Move types
      //Rock vs X
      if (playerOneMoveOneType === 'rock') {
        if (playerTwoMoveOneType === 'paper') {
           return 'Player Two';
        } else if (playerTwoMoveOneType === 'scissors') {
            return 'Player One';
        } 
      
      //Paper vs X
      }else if (playerOneMoveOneType === 'paper') {
        if (playerTwoMoveOneType === 'rock') {
            return 'Player One';
        } else if (playerTwoMoveOneType === 'scissors') {
            return 'Player Two';
        } 
      //Scissors vs X  
      }else if (playerOneMoveOneType === 'scissors') {
        if (playerTwoMoveOneType === 'rock') {
            return 'Player Two';
        } else if (playerTwoMoveOneType === 'paper') {
            return 'Player One';
        } 
      }
}

function roundTwoWinner() {
    //Same move type
    if (playerOneMoveTwoType === playerTwoMoveTwoType) {
        return sameMoveTypeWinnerRoundTwo();
      }

      //Different Move types
      //Rock vs X
      if (playerOneMoveTwoType === 'rock') {
        if (playerTwoMoveTwoType === 'paper') {
           return 'Player Two';
        } else if (playerTwoMoveTwoType === 'scissors') {
            return 'Player One';
        } 
      
      //Paper vs X
      }else if (playerOneMoveTwoType === 'paper') {
        if (playerTwoMoveTwoType === 'rock') {
            return 'Player One';
        } else if (playerTwoMoveTwoType === 'scissors') {
            return 'Player Two';
        } 
      //Scissors vs X  
      }else if (playerOneMoveTwoType === 'scissors') {
        if (playerTwoMoveTwoType === 'rock') {
            return 'Player Two';
        } else if (playerTwoMoveTwoType === 'paper') {
            return 'Player One';
        } 
      }
}

function roundThreeWinner() {
    //Same move type
    if (playerOneMoveThreeType === playerTwoMoveThreeType) {
        return sameMoveTypeWinnerRoundThree();
      }

      //Different Move types
      //Rock vs X
      if (playerOneMoveThreeType === 'rock') {
        if (playerTwoMoveThreeType === 'paper') {
           return 'Player Two';
        } else if (playerTwoMoveThreeType === 'scissors') {
            return 'Player One';
        } 
      
      //Paper vs X
      }else if (playerOneMoveThreeType === 'paper') {
        if (playerTwoMoveThreeType === 'rock') {
            return 'Player One';
        } else if (playerTwoMoveThreeType === 'scissors') {
            return 'Player Two';
        } 
      //Scissors vs X  
      }else if (playerOneMoveThreeType === 'scissors') {
        if (playerTwoMoveThreeType === 'rock') {
            return 'Player Two';
        } else if (playerTwoMoveThreeType === 'paper') {
            return 'Player One';
        } 
      }
}

//Rd 1
//returns which player has high strength value for given move
function sameMoveTypeWinnerRoundOne() {
    if (playerOneMoveOneValue > playerTwoMoveOneType) {
        return 'Player One';
    } else if (playerOneMoveOneValue < playerTwoMoveOneValue) {
       return 'Player Two';
    } else {
        return 'Tie';
    }
}

//Rd 2
//returns which player has high strength value for given move
function sameMoveTypeWinnerRoundTwo() {
    if (playerOneMoveTwoValue > playerTwoMoveTwoType) {
        return 'Player One';
    } else if (playerOneMoveTwoValue < playerTwoMoveTwoValue) {
       return 'Player Two';
    } else {
        return 'Tie';
    }
}

//Rd 3
//returns which player has high strength value for given move
function sameMoveTypeWinnerRoundThree() {
    if (playerOneMoveThreeValue > playerTwoMoveThreeType) {
        return 'Player One';
    } else if (playerOneMoveThreeValue < playerTwoMoveThreeValue) {
       return 'Player Two';
    } else {
        return 'Tie';
    }
}

function getGameWinner() {
    let playerOneWins = 0;
    let playerTwoWins = 0;

    if (getRoundWinner(1) !== 'Tie') {
        getRoundWinner(1) == 'Player One' ? playerOneWins++ : playerTwoWins++;
    } 
    if (getRoundWinner(2) !== 'Tie') {
        getRoundWinner(2) == 'Player One' ? playerOneWins++ : playerTwoWins++;
    } 
    if (getRoundWinner(3) !== 'Tie') {
        getRoundWinner(3) == 'Player One' ? playerOneWins++ : playerTwoWins++;
    } 
    
    if (playerOneWins == playerTwoWins) {
        return 'Tie';
    }
    else if (playerOneWins < playerTwoWins) {
         return 'Player Two';
    } else { 
        return 'Player One';
    }
    
}









