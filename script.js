
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  let result = '';

  if (playerChoice === computerChoice) {
    result = "It's a tie!😊";
  } else if (

(playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    result = "You win!🏆";
    playerScore++;
  } else {
    result = "You lose!🙃";
    computerScore++;
  }

   document.getElementById('result').innerText = result;

   document.getElementById('score').innerText =
    `Player: ${playerScore} | Computer: ${computerScore}`;
}

function resetGame() {
      playerScore = 0;
      computerScore = 0;

      document.getElementById('result').innerText = "Choose your move!";
      document.getElementById('score').innerText = "You: 0 | Computer: 0";
    }

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  return choices[Math.floor(Math.random() * 3)];
}

function playGame(playerChoice) {
  const computerChoice = getComputerChoice();
  let result = '';

  if (playerChoice === computerChoice) {
    result = "It's a tie!";
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    result = "You win!";
    playerScore++;
  } else {
    result = "Computer wins!";
    computerScore++;
  }

  // Display choices
  const playerEl = document.getElementById('playerChoice');
  const computerEl = document.getElementById('computerChoice');

  playerEl.innerText = playerChoice;
  computerEl.innerText = computerChoice;

  // Animation
  playerEl.classList.remove('pop');
  computerEl.classList.remove('pop');

  void playerEl.offsetWidth;
  void computerEl.offsetWidth;

  playerEl.classList.add('pop');
  computerEl.classList.add('pop');

  // Reset highlights
  document.getElementById('playerBox').classList.remove('winner', 'loser');
  document.getElementById('computerBox').classList.remove('winner', 'loser');

  // Highlight winner/loser
  if (result === "You win!") {
    document.getElementById('playerBox').classList.add('winner');
    document.getElementById('computerBox').classList.add('loser');
  } else if (result === "Computer wins!") {
    document.getElementById('computerBox').classList.add('winner');
    document.getElementById('playerBox').classList.add('loser');
  }

  // Update UI
  document.getElementById('result').innerText = result;
  document.getElementById('playerScore').innerText = playerScore;
  document.getElementById('computerScore').innerText = computerScore;
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;

  document.getElementById('playerScore').innerText = 0;
  document.getElementById('computerScore').innerText = 0;
  document.getElementById('playerChoice').innerText = '-';
  document.getElementById('computerChoice').innerText = '-';
  document.getElementById('result').innerText = 'Make your move!';

  document.getElementById('playerBox').classList.remove('winner', 'loser');
  document.getElementById('computerBox').classList.remove('winner', 'loser');
}

