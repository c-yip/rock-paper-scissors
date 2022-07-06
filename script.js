
function game() {
    function computerPlay() {
        const choices = ["Rock", "Paper", "Scissors"];
        compChoice = choices[Math.floor(Math.random() * choices.length)];
        return compChoice;
    }
    console.log(computerPlay());

    let playerChoice = prompt("Please choose Rock, Paper, or Scissors.").toLowerCase();
    
    if (playerChoice == "rock" && compChoice == "Scissors") {
        console.log(compChoice);
        return "You win!"
    }

}

console.log(game());