let computerPlay = () => {
  let choice = ['Rock', 'Paper', 'Scissors'];
  return choice[Math.floor(Math.random() * choice.length)];
};

let playRound = (playerSelection, computerSelection) => {
  if (
    (playerSelection.toLowerCase() === 'rock' &&
      computerSelection === 'Scissors') ||
    (playerSelection.toLowerCase() === 'paper' &&
      computerSelection === 'Rock') ||
    (playerSelection.toLowerCase() === 'scissors' &&
      computerSelection === 'Paper')
  ) {
    return `You Win! ${
      playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase()
    } beats ${computerSelection}`;
  } else if (
    (playerSelection.toLowerCase() === 'rock' &&
      computerSelection === 'Paper') ||
    (playerSelection.toLowerCase() === 'paper' &&
      computerSelection === 'Scissors') ||
    (playerSelection.toLowerCase() === 'scissors' &&
      computerSelection === 'Rock')
  ) {
    return `You Lose! ${computerSelection} beats ${
      playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase()
    }`;
  } else {
    return "It's a Draw!";
  }
};

let game = () => {
  let playerScore = 0;
  let computerScore = 0;

  for (i = 0; i < 5; i++) {
    let playerSelection = prompt('Enter: Rock, Paper or Scissors', '');
    let result = playRound(playerSelection, computerPlay());

    if (result.indexOf('Win') > 0) {
      playerScore++;
    } else if (result.indexOf('Lose') > 0) {
      computerScore++;
    }
    console.log(result);
    alert(`${result}\nYou: ${playerScore}, Comp: ${computerScore}`);
  }
};

alert("Lablab let's play a game!\n💝 👊 ✋ ✌ 💖");
game();
