const choices = ["Rock", "Paper", "Scissors"];

function computerPlay() {
    compChoice = choices[Math.floor(Math.random() * choices.length)];
    return compChoice;
}
console.log(computerPlay());

function playerPlay() {
    
}