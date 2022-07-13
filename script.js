let playerScore = 0;
let compScore = 0;
let playerChoice;

const results = document.querySelector(".results");

// event listeners for each button

const btnRock = document.querySelector(".btnRock");
btnRock.addEventListener("click", function e() {
    playerChoice = "rock";
    console.log(playerChoice);
    playRound();
})

const btnPaper = document.querySelector(".btnPaper");
btnPaper.addEventListener("click", function e() {
    playerChoice = "paper";
    console.log(playerChoice);
    playRound();
})

const btnScissors = document.querySelector(".btnScissors");
btnScissors.addEventListener("click", function e() {
    playerChoice = "scissors";
    console.log(playerChoice);
    playRound();
})

// generates computer input and plays round of game
function playRound(){
    function computerPlay() {
        const choices = ["Rock", "Paper", "Scissors"];
        compChoice = choices[Math.floor(Math.random() * choices.length)];
        return compChoice;
    }
    computerPlay();
    console.log(playerChoice);
    if (playerChoice == "rock" && compChoice == "Scissors") {
        playerScore++; 
        results.append("h1"); 
        results.textContent = ("Computer chose Scissors. Rock beats Scissors. YOU WIN!");
    } else if (playerChoice == "rock"  && compChoice == "Paper") {
        compScore++;
        results.append("h1"); 
        results.textContent = "Computer chose Paper. Paper beats Rock. YOU LOSE!";
    } else if (playerChoice == "rock" && compChoice == "Rock") {
        return "Computer chose Rock. It's a TIE!";
   
    } else if (playerChoice == "paper" && compChoice == "Rock") {
        playerScore++; 
        results.append("h1"); 
        results.textContent = "Computer chose Rock, YOU WIN!";
    } else if (playerChoice == "paper" && compChoice == "Paper") {
        results.append("h1"); 
        results.textContent = "Computer chose Paper. It's a TIE!"
    } else if (playerChoice == "paper" && compChoice == "Scissors") {
        compScore++;
        results.append("h1"); 
        results.textContent = "Computer chose Scissors. Scissors beats Paper. YOU LOSE!"
    
    } else if (playerChoice == "scissors" && compChoice == "Paper") {
        playerScore++; 
        results.append("h1"); 
        results.textContent = "Computer chose Paper. Scissors beats Paper. YOU WIN!"
    } else if (playerChoice == "scissors" && compChoice == "Rock") {
        compScore++;
        results.append("h1"); 
        results.textContent = "Computer chose Rock. Rock beats Scissors. YOU LOSE!"
    } else if (playerChoice == "scissors" && compChoice == "Scissors") {
        results.append("h1"); 
        results.textContent = "Computer chose Scissors. It's a TIE!"
    }
}


// function game() { 
//     // plays five rounds
//     function loop() { 
//         for (i = 0; i < 5; i++) {
//             console.log("Round " + (i + 1));
//             console.log(playRound());
//             console.log("Player Score: " + playerScore + " | " + "Computer Score: " + compScore);
//         }
//     }
    
//     function result() {
//         if (playerScore > compScore) {
//             console.log("FINAL RESULT: YOU WIN!");
//         } else if (playerScore < compScore) {
//             console.log("FINAL RESULT: YOU LOSE!");
//         } else if (playerScore == compScore) {
//             console.log("FINAL RESULT: IT'S A TIE. BOOOOOO!")
//         }
//     }
//     return loop(), result();
// }

// console.log(game());


