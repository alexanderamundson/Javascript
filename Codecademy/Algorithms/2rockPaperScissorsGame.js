//Rock, paper, scissors game

//returns user choice
//if choice is invalid, log error to console
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' ) { 
    return userInput;
  } else {
    console.log("Error in user input!");
  }
};

//generates random number between 0 - 2
//returns choice based on random number
const getComputerChoice = () => {
  computerChoice = Math.floor( Math.random() * 3 );
  switch (computerChoice) {
    case 0:  return 'rock';
    case 1:  return 'paper'
    case 2:  return 'scissors'
          
  }
};

//Determins which player wins game.
//Returns 'Tie Game!' if both make same choice
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'Tie game!';
  }
  if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
          return 'Computer wins!';
      } else {
        return 'User wins!';
      }
  }
  if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
          return 'Computer wins!';
      } else {
        return 'User wins!';
      }
  }
  if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
          return 'Computer wins!';
      } else {
        return 'User wins!';
      }
  }  
};

//Simulates a game of Rock, Paper, Scissors
const playGame = () => {
  var userChoice = getUserChoice('scissors');
  var computerChoice = getComputerChoice();
  console.log(`User choice is: ${userChoice}\nComputer choice is: ${computerChoice}`);
  console.log( determineWinner(userChoice, computerChoice) );
};

playGame();