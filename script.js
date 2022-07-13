let playerScore = 0;
let compScore = 0;
let playerChoice;

const results = document.querySelector(".results");
const score = document.querySelector(".score");
const finalResult = document.querySelector(".finalResult");

// event listeners for each button

const btnRock = document.querySelector(".btnRock");
btnRock.addEventListener("click", function e() {
    playerChoice = "rock";
    playRound();
})

const btnPaper = document.querySelector(".btnPaper");
btnPaper.addEventListener("click", function e() {
    playerChoice = "paper";
    playRound();
})

const btnScissors = document.querySelector(".btnScissors");
btnScissors.addEventListener("click", function e() {
    playerChoice = "scissors";
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
    if (playerChoice == "rock" && compChoice == "Scissors") {
        playerScore++;  
        results.textContent = ("Computer chose Scissors. Rock beats Scissors. YOU WIN!");
    } else if (playerChoice == "rock"  && compChoice == "Paper") {
        compScore++; 
        results.textContent = "Computer chose Paper. Paper beats Rock. YOU LOSE!";
    } else if (playerChoice == "rock" && compChoice == "Rock") { 
        results.textContent = "Computer chose Rock. It's a TIE!";
   
    } else if (playerChoice == "paper" && compChoice == "Rock") {
        playerScore++;  
        results.textContent = "Computer chose Rock, YOU WIN!";
    } else if (playerChoice == "paper" && compChoice == "Paper") { 
        results.textContent = "Computer chose Paper. It's a TIE!"
    } else if (playerChoice == "paper" && compChoice == "Scissors") {
        compScore++; 
        results.textContent = "Computer chose Scissors. Scissors beats Paper. YOU LOSE!"
    
    } else if (playerChoice == "scissors" && compChoice == "Paper") {
        playerScore++;  
        results.textContent = "Computer chose Paper. Scissors beats Paper. YOU WIN!"
    } else if (playerChoice == "scissors" && compChoice == "Rock") {
        compScore++; 
        results.textContent = "Computer chose Rock. Rock beats Scissors. YOU LOSE!"
    } else if (playerChoice == "scissors" && compChoice == "Scissors") { 
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


