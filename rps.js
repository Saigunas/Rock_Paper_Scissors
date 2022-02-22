//Computer randomly returns rock, paper or scissors
function computerPlay() {
    let possibleMoves = Array("Rock", "Paper", "Scissors");
    let item = possibleMoves[Math.floor(Math.random()*possibleMoves.length)];
    console.log(item);
}

computerPlay();