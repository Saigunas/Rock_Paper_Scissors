
let p1Score = 0;
let p2Score = 0;


const cards = document.querySelectorAll('.pCard');

cards.forEach(pCard => pCard.addEventListener('click', 
  playerPlay));

function playerPlay(e) {
  const playerSelection = e.target.getAttribute("data-sign");
  playRound(playerSelection, computerPlay());
} 


//Computer randomly returns rock, paper or scissors
function computerPlay() {
  let possibleMoves = Array("Rock", "Paper", "Scissors");
  let item = possibleMoves[Math.floor(Math.random()*possibleMoves.length)];
  return item;
}


//Play one round, announce result
function playRound(playerSelection, computerSelection) {

  if(playerSelection === computerSelection) {
    announceRoundWinner('It is a tie!');
    return;
  }

  switch (playerSelection) {
  case 'Rock':
    if(computerSelection == 'Paper') {
      announceRoundWinner('You lose!', playerSelection, computerSelection);
    } else {
      announceRoundWinner('You win!', playerSelection, computerSelection);
    }
    break;
  case 'Paper':
    if(computerSelection == 'Scissors') {
      announceRoundWinner('You lose!', playerSelection, computerSelection);
    } else {
      announceRoundWinner('You win!', playerSelection, computerSelection);
    }
    break;
  case 'Scissors':
    if(computerSelection == 'Rock') {
      announceRoundWinner('You lose!', playerSelection, computerSelection);
    } else {
      announceRoundWinner('You win!', playerSelection, computerSelection);
    }
    break;
  }
}

  
function announceRoundWinner(result, playerSelection, computerSelection) {
  if(result == 'You lose!') {
    console.log(result + ' ' + computerSelection + ' beats ' + playerSelection);
    p2Score++;
  } else if(result == 'You win!') {
    console.log(result + ' ' + playerSelection + ' beats ' + computerSelection);
    p1Score++;
  } else {
    console.log(result);
  }
}



function announceGameWinner(p1Score, p2Score) {
  if(p1Score > p2Score) {
    return "Player 1 won!";
  }
  if(p1Score < p2Score) {
    return "Player 1 lost!"
  }
}
