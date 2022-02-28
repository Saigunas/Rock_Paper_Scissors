
let p1Score = 0;
let p2Score = 0;
let numberGamesToWin = 5;



const textWinAnnounce = document.querySelector('.winnerAnnounce');
const textPcResult = document.querySelector('.pcResult');
const textPlayerResult = document.querySelector('.playerResult');

const cards = document.querySelectorAll('.pCard');


const restartButton = document.querySelector('.restartButton');
restartButton.addEventListener('click', startGame);


//start the game when page is opened
startGame();

function startGame() {
  p1Score = 0;
  p2Score = 0;
  restartButton.style.visibility='hidden';
  textPlayerResult.textContent = `${p1Score} points`;
  textPcResult.textContent = `${p1Score} points`;
  textWinAnnounce.textContent = 'First to reach 5 points WINS!';
  textWinAnnounce.style.fontSize = '10vw';

  cards.forEach(pCard => pCard.addEventListener('click', 
    playerPlay));
}

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

  textWinAnnounce.style.fontSize = '5vw';

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

    p2Score++;
    textPcResult.textContent = `${p2Score} ${pointOrPoints(p2Score)}`;
    if(p2Score === numberGamesToWin) {
      announceGameWinner();
      return;
    }

    textWinAnnounce.textContent = (result + ' ' + computerSelection + ' beats ' + playerSelection);
  
  } else if(result == 'You win!') {

    p1Score++;
    textPlayerResult.textContent = `${p1Score} ${pointOrPoints(p1Score)}`;
    if(p1Score === numberGamesToWin) {
      announceGameWinner();
      return;
    }

    textWinAnnounce.textContent = (result + ' ' + playerSelection + ' beats ' + computerSelection);
  
  } else {
    textWinAnnounce.textContent = result;
  }
}


function announceGameWinner() {
  textWinAnnounce.style.fontSize = '10vw';
  if(p1Score > p2Score) {
    textWinAnnounce.textContent = "Player 1 won!";
  }
  if(p1Score < p2Score) {
    textWinAnnounce.textContent = "Player 1 lost!"
  }
  cards.forEach(pCard => pCard.removeEventListener('click', 
  playerPlay));

  restartButton.style.visibility='visible';
}

function pointOrPoints(nPoint) {
  if(nPoint === 1) {
    return 'point';
  } else {
    return 'points';
  }
}