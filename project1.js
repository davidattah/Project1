let computerSelection;
function getComputerChoice(){
   let randomNumber = Math.floor(Math.random()* 3)+1;
   if(randomNumber == 1){
    computerSelection = "Rock"
   }else if(randomNumber == 2){
    computerSelection = "Paper"
   }else{
    computerSelection = "Scissors"
   }
}
let playerSelection;
function getPlayerChoice(){
    let condition = true;
    playerSelection = prompt("What is your choice?");
    while(condition == true)
    if(playerSelection.toLowerCase() === "rock" || playerSelection.toLowerCase() === "paper" || playerSelection.toLowerCase() === "scissors"){
        condition = false;
        alert("Thank you")
    }else{
         alert("Not a valid option")
         getPlayerChoice()
    }
}

function playSingleRound(playerSelection, computerSelection){

}