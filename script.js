let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  let result = '';

  if (playerChoice === computerChoice) {
    result = "It's a tie!😊";
  } else if (

     
  document.getElementById('playerScore').innerText = playerScore;
  document.getElementById('computerScore').innerText = computerScore;
}

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