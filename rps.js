//Computer randomly returns rock, paper or scissors
function computerPlay() {
  let possibleMoves = Array("Rock", "Paper", "Scissors");
  let item = possibleMoves[Math.floor(Math.random()*possibleMoves.length)];
  console.log("Computer throws " + item);
  return item;
}

//Player selects one of possible moves
function playerPlay() {
  let input = "";
  let validMove = false;

  //Ask for input until move is valid
  while(validMove == false) {
    
    let possibleMoves = Array("Rock", "Paper", "Scissors");
    input = prompt("Please enter your move:");
    
    input = input.toLowerCase();
    input = capitalizeFirstLetter(input);
  
    //Check if move is valid
    for (const move of possibleMoves) {
      if(move == input) {
        validMove = true;
      }
    }
  
    //If move is invalid repeat
    if(validMove == false) {
      alert("Invalid move");
    }
  }
  
  console.log("Player throws " + input);
  return input;
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

//Play one round, return result
function playRound(player1, player2) {
  if(player1 === player2) {
  return 'It is a tie!';
  }
  switch (player1) {
  case 'Rock':
    if(player2 == 'Paper') {
      return 'You lose!';
    } else {
      return 'You win!';
    }
  case 'Paper':
    if(player2 == 'Scissors') {
      return 'You lose!';
    } else {
      return 'You win!';
    }
  case 'Scissors':
    if(player2 == 'Rock') {
      return 'You lose!';
    } else {
      return 'You win!';
    }
  }
}

//Play a number of games and announce a winner
function game() {

  let p1Score = 0;
  let p2Score = 0;
  
  while (p1Score != 5 && p2Score != 5) {
    const playerSelection = playerPlay();
    const computerSelection = computerPlay();
    let result = playRound(playerSelection, computerSelection);

    if(result == 'You lose!') {
      console.log(result + ' ' + computerSelection + ' beats ' + playerSelection);
      p2Score++;
    } else if(result == 'You win!') {
      console.log(result + ' ' + playerSelection + ' beats ' + computerSelection);
      p1Score++;
    } else {
      console.log(result);
    }

      console.log(" ");
    
  }

  console.log(result(p1Score, p2Score));
}

//Return a result of the game
function result(p1Score, p2Score) {
  if(p1Score > p2Score) {
    return "Player 1 won!";
  }
  if(p1Score < p2Score) {
    return "Player 1 lost!"
  }
}

game();