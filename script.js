//create a function to return one of three values, "Rock", "Paper", or "Scissors'

let humanScore=0;
let computerScore=0;

 
function getComputerChoice() {
    const randomNum = Math.floor(Math.random()*3)

    if (randomNum === 0) {
        return "Rock";
     }else if (randomNum === 1) {
        return "Paper";  
     }else { 
        return "Scissors";
   }
}
 const computerChoice =getComputerChoice();
//create a function that takes the user choice and returns it

function getHumanChoice() {
   const humanChoice = prompt("Choose between Rock, Paper, or Scissors!", "enter your choice")
      return humanChoice
      }
function playRound (humanChoice, computer)