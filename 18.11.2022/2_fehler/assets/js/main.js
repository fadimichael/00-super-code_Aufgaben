function selectRock() {
  play("rock");
}

function selectPaper() {
  play("paper");
}

function selectScissors() {
  play("scissors");
}

function generateCompMove() {
  const randomNumber = Math.floor(Math.random() * 3);
  let move;
  if (randomNumber === 0) {
    move = "rock";
  } else if (randomNumber === 1) {
    move = "paper";
  } else {
    move = "scissors";
  }
  return move;
}

function play(playerMove) {
  let computerMove = generateCompMove();
  console.log(playerMove);
  console.log(computerMove);

  if (playerMove === "rock" && computerMove === "scissors") {
    console.log("Rock (player) beats Scissors (comp)");
  } else if (playerMove === "paper" && computerMove === "rock") {
    console.log("Paper (player) beats Rock (comp)");
  } else if (playerMove === "scissors" && computerMove === "paper") {
    console.log("Scissors (player) beats Paper (comp)");
  } else if (computerMove === "rock" && playerMove === "scissors") {
    console.log("Rock (comp) beats Scissors (player)");
  } else if (computerMove === "paper" && playerMove === "rock") {
    console.log("Paper (comp) beats Rock (player)");
  } else if (computerMove === "scissors" && playerMove === "paper") {
    console.log("Scissors (comp) beats Paper (player)");
  } else {
    console.log(`It was a draw, you both chose ${playerMove}`);
  }
}
