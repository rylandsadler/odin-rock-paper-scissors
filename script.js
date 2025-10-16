//create a function to return one of three values, "Rock", "Paper", or "Scissors'
 
function getComputerChoice() {
    const randomNum = Math.floor(Math.random()*3)

    if (randomNum === 0) {
        return "rock";
     }else if (randomNum === 1) {
        return "paper";  
     }else { 
        return "scissors";
      
   }
}
 const computerChoice =getComputerChoice();
//create a function that takes the user choice and returns it

function getHumanChoice() {
   let humanChoice = prompt("Choose between Rock, Paper, or Scissors!", "enter your choice")
      humanChoice= humanChoice.toLowerCase();
      return humanChoice
      }
const humanChoice =getHumanChoice();
function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (!humanChoice) return "You cancelled the game.";

    if (humanChoice === computerChoice) {
      return `It's a tie! You both chose ${humanChoice}.`;
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      humanScore++;
      return `You win! ${humanChoice} beats ${computerChoice}.`;
    } else {
      computerScore++;
      return `You lose! ${computerChoice} beats ${humanChoice}.`;
    }
  }

  // Play 5 rounds
  for (let round = 1; round <= 5; round++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    console.log(`\nRound ${round}:`);
    console.log(`You chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);

    const result = playRound(humanChoice, computerChoice);
    console.log(result);
    console.log(`Score — You: ${humanScore}, Computer: ${computerScore}`);
  }

  // Declare final winner
  console.log("\nFinal Results:");
  if (humanScore > computerScore) {
    console.log("🎉 You win the game!");
  } else if (computerScore > humanScore) {
    console.log("💻 The computer wins the game!");
  } else {
    console.log("It's a tie overall!");
  }
}

// Start the game
playGame();