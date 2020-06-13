let playerScore = 0;
let computerScore = 0;

const btnRock = document.getElementById('rock');
const btnPaper = document.getElementById('paper');
const btnScissors = document.getElementById('scissors');

const results = document.querySelector('#results');
const endResult = document.querySelector('#endResult');
const scoreP = document.querySelector('#scoreP');
const scoreC = document.querySelector('#scoreC');

let computerPlay = () => {
  let choice = ['Rock', 'Paper', 'Scissors'];
  return choice[Math.floor(Math.random() * choice.length)];
};

let playRound = (playerSelection, computerSelection) => {
  if (playerScore == 5 || computerScore == 5) {
    playerScore = 0;
    computerScore = 0;
    scoreP.textContent = playerScore;
    scoreC.textContent = computerScore;
    endResult.textContent = 'First to 5 points wins!';
  }

  if (
    (playerSelection.toLowerCase() === 'rock' &&
      computerSelection === 'Scissors') ||
    (playerSelection.toLowerCase() === 'paper' &&
      computerSelection === 'Rock') ||
    (playerSelection.toLowerCase() === 'scissors' &&
      computerSelection === 'Paper')
  ) {
    playerScore++;
    scoreP.textContent = playerScore;
    scoreC.textContent = computerScore;
    results.textContent = `You Win! ${
      playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase()
    } beats ${computerSelection}.`;

    if (playerScore == 5) {
      results.textContent = `You Win! ${
        playerSelection[0].toUpperCase() +
        playerSelection.slice(1).toLowerCase()
      } beats ${computerSelection}.`;
      endResult.textContent = 'You are the first to win 5 games! Winner!';
    }
  } else if (
    (playerSelection.toLowerCase() === 'rock' &&
      computerSelection === 'Paper') ||
    (playerSelection.toLowerCase() === 'paper' &&
      computerSelection === 'Scissors') ||
    (playerSelection.toLowerCase() === 'scissors' &&
      computerSelection === 'Rock')
  ) {
    computerScore++;
    scoreP.textContent = playerScore;
    scoreC.textContent = computerScore;
    results.textContent = `You Lose! ${computerSelection} beats ${
      playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase()
    }.`;

    if (computerScore == 5) {
      results.textContent = `You Lose! ${computerSelection} beats ${
        playerSelection[0].toUpperCase() +
        playerSelection.slice(1).toLowerCase()
      }.`;
      endResult.textContent = 'The computer won 5 games first. Try again!';
    }
  } else {
    results.textContent = `It's a Draw!`;
  }
};

btnRock.addEventListener('click', () => playRound('Rock', computerPlay()));
btnPaper.addEventListener('click', () => playRound('Paper', computerPlay()));
btnScissors.addEventListener('click', () =>
  playRound('Scissors', computerPlay())
);
