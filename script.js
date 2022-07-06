
function game() {
    function playRound(){
        function computerPlay() {
            const choices = ["Rock", "Paper", "Scissors"];
            compChoice = choices[Math.floor(Math.random() * choices.length)];
            return compChoice;
        }
        computerPlay();
        // console.log(compChoice);

        let playerChoice = prompt("Please choose Rock, Paper, or Scissors.").toLowerCase();

        // These do not work.
        // if (playerChoice != "rock" || playerChoice != "paper" || playerChoice != "scissors") {
        //     return playerChoice + " is not a valid input. Please enter either rock, paper, or scissors."
        // }

        // if (playerChoice = null) {
        //     return playerChoice + " is not a valid input. Please enter either rock, paper, or scissors."
        // }
        
        if (playerChoice == "rock" && compChoice == "Scissors") {
            return "Computer chose Scissors. Rock beats Scissors. YOU WIN!"
        } else if (playerChoice == "rock"  && compChoice == "Paper") {
            return "Computer chose Paper. Paper beats Rock. YOU LOSE!"
        } else if (playerChoice == "rock" && compChoice == "Rock") {
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
    return playRound();
}

console.log(game());