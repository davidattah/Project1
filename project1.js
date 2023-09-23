let computerSelection;
function getComputerChoice(){
   let randomNumber = Math.floor(Math.random()* 3)+1;
   if(randomNumber == 1){
    computerSelection = "rock"
   }else if(randomNumber == 2){
    computerSelection = "paper"
   }else{
    computerSelection = "scissors"
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