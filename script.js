let playerScore = 0;
let compScore = 0;
let tiedScore = 0;
let playerChoice;
let round = 0;

// selects result, scores, results, and rounds classes
const results = document.querySelector(".results");
const playerDisplayScore = document.querySelector(".playerDisplayScore");
const computerDisplayScore = document.querySelector(".computerDisplayScore");
const finalResult = document.querySelector(".finalResult");
const tiedDisplayScore = document.querySelector(".tiedDisplayScore");
const rounds = document.querySelector(".rounds");

// event listeners for each button
const btnRock = document.querySelector(".btnRock");
btnRock.addEventListener("click", function e() {
    playerChoice = "rock";
    round++;
    rounds.textContent = "Round " + (round);
    playRound();
})

const btnPaper = document.querySelector(".btnPaper");
btnPaper.addEventListener("click", function e() {
    playerChoice = "paper";
    round++;
    rounds.textContent = "Round " + (round);
    playRound();
})

const btnScissors = document.querySelector(".btnScissors");
btnScissors.addEventListener("click", function e() {
    playerChoice = "scissors";
    round++;
    rounds.textContent = "Round " + (round);
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
        results.textContent = ("Computer chose Scissors. Rock beats Scissors. You win this round.");
    } else if (playerChoice == "rock"  && compChoice == "Paper") {
        compScore++; 
        results.textContent = "Computer chose Paper. Paper beats Rock. Computer wins this round.";
    } else if (playerChoice == "rock" && compChoice == "Rock") { 
        tiedScore++;
        results.textContent = "Computer chose Rock. It's a TIE!";

    } else if (playerChoice == "paper" && compChoice == "Rock") {
        playerScore++;  
        results.textContent = "Computer chose Rock, You win this round.";
    } else if (playerChoice == "paper" && compChoice == "Paper") { 
        tiedScore++;
        results.textContent = "Computer chose Paper. It's a TIE!"
    } else if (playerChoice == "paper" && compChoice == "Scissors") {
        compScore++; 
        results.textContent = "Computer chose Scissors. Scissors beats Paper. Computer wins this round."
    
    } else if (playerChoice == "scissors" && compChoice == "Paper") {
        playerScore++;  
        results.textContent = "Computer chose Paper. Scissors beats Paper. You win this round."
    } else if (playerChoice == "scissors" && compChoice == "Rock") {
        compScore++; 
        results.textContent = "Computer chose Rock. Rock beats Scissors. Computer wins this round."
    } else if (playerChoice == "scissors" && compChoice == "Scissors") { 
        tiedScore++;
        results.textContent = "Computer chose Scissors. It's a TIE!"
    }
    
    // sets player and computer scores to display in html
    playerDisplayScore.textContent = "Player Score: " + playerScore;
    computerDisplayScore.textContent = "Computer Score: " + compScore;
    tiedDisplayScore.textContent = "Tied: " + tiedScore;

    /// displays winner when either player reaches 5 points
    if (playerScore == 5) {
        finalResult.textContent = "YOU WIN!";
    } else if (compScore == 5) {
        finalResult.textContent = "COMPUTER WINS! LOSER!"
    }
}
