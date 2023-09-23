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
     if(playerSelection == "rock" && computerSelection == "scissors") {
        return "You win! Rock beats Scissors"
     }else if(playerSelection == "scissors" && computerSelection == "rock"){
        return "You lose! Scissors beats Rock"
     }

     if(playerSelection == "paper" && computerSelection == "rock"){
        return "You win! Paper beats Rock"
     }else if(playerSelection == "rock" && computerSelection == "paper"){
        return "You lose! Paper beats Rock"
     }

     if(playerSelection == "scissors" && computerSelection =="paper"){
        return "You win! Scissors beats paper"
     }else if(playerSelection == "paper" && computerSelection =="scissors"){
        return "You lose! Scissors beats paper"
     }
}

