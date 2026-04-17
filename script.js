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
