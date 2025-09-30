//create a function to return one of three values, "Rock", "Paper", or "Scissors'
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

//create a function that takes the user choice and returns it

function 