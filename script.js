
function game() {
    function computerPlay() {
        const choices = ["Rock", "Paper", "Scissors"];
        compChoice = choices[Math.floor(Math.random() * choices.length)];
        return compChoice;
    }
    computerPlay();
    // console.log(compChoice);

    let playerChoice = prompt("Please choose Rock, Paper, or Scissors.").toLowerCase();
    
    if (playerChoice == "rock" && compChoice == "Scissors") {
        // console.log(compChoice);
        return "Computer chose Scissors. Rock beats Scissors. YOU WIN!"
    } else if (playerChoice == "rock"  && compChoice == "Paper") {
        // console.log(compChoice);
        return "Computer chose Paper. Paper beats Rock. YOU LOSE!"
    } else if (playerChoice == "rock" && compChoice == "Rock") {
        // console.log(compChoice);
        return "Computer chose Rock. It's a TIE!"
    } else if (playerChoice == "paper" && compChoice == "Rock") {
        return "Computer chose Rock, YOU WIN!"
    
    } else if (playerChoice == "paper" && compChoice == "Paper") {
        return "Computer chose Paper. It's a TIE!"
    } else if (playerChoice == "paper" && compChoice == "Rock") {
        return "Computer chose Rock. Paper beats Rock. YOU WIN!"
    } else if (playerChoice == "paper" && compChoice == "Scissors") {
        return "Computer chose Scissors. Scissors beats Paper. YOU LOSE!"
    
    }else if (playerChoice == "scissors" && compChoice == "Paper") {
        return "Computer chose Paper. Scissors beats Paper. YOU WIN!"
    } else if (playerChoice == "scissors" && compChoice == "Rock") {
        return "Computer chose Rock. Rock beats Scissors. YOU LOSE!"
    } else if (playerChoice == "scissors" && compChoice == "Scissors") {
        return "Computer chose Scissors. It's a TIE!"
    }
}

console.log(game());