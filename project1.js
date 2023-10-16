function getComputerChoice(){
   let randomNumber = Math.floor(Math.random()* 3)+1;
   if(randomNumber == 1){
    return computerSelection = "rock"
   }else if(randomNumber == 2){
    return computerSelection = "paper"
   }else{
     return computerSelection = "scissors"
   }
}

function getPlayerChoice(){
    let condition = true;
    playerSelection = prompt("Rock, paper or scissors?");
    while(condition == true)
    if(playerSelection.toLowerCase() === "rock" || playerSelection.toLowerCase() === "paper" || playerSelection.toLowerCase() === "scissors"){
        condition = false;
        playerSelection = playerSelection.toLowerCase()
        alert("Thank you")
        return playerSelection;
    }else{
         alert("Not a valid option")
         getPlayerChoice()
    }
} 

let playerScore = 0;
let computerScore = 0;
function playSingleRound(playerSelection, computerSelection){
     if(playerSelection === "rock" && computerSelection === "scissors") {
        playerScore +=1;
        console.log(`You win ${playerSelection} beats ${computerSelection}! ${playerScore} : ${computerScore}.`)
     }else if(playerSelection === "paper" && computerSelection === "rock"){
        playerScore +=1;
        console.log(`You win ${playerSelection} beats ${computerSelection}! ${playerScore} : ${computerScore}.`)
     }else if(playerSelection === "scissors" && computerSelection === "paper"){
        playerScore +=1;
        console.log(`You win ${playerSelection} beats ${computerSelection}! ${playerScore} : ${computerScore}.`)
    }else if(computerSelection=== "rock" && playerSelection === "scissors"){
        computerScore +=1;
        console.log(`You lose ${computerSelection} beats ${playerSelection}! ${playerScore} : ${computerScore}.`) 
    }else if(computerSelection === "paper" && playerSelection === "rock"){
            computerScore +=1;
            console.log(`You lose ${computerSelection} beats ${playerSelection}! ${playerScore} : ${computerScore}.`)   
    }else if(computerSelection === "scissors" && playerSelection === "paper"){
            computerScore +=1;
            console.log(`You lose ${computerSelection} beats ${playerSelection}! ${playerScore} : ${computerScore}.`) 
    }else if(playerSelection === computerSelection || computerSelection === playerSelection){
        console.log(`It is a tie! ${playerScore} : ${computerScore}.`)
     } 
    }

    const body = document.querySelector("body")
    const rockButton = document.createElement("button")
    const scissorsButton = document.createElement("button")
    const paperButton = document.createElement("button")
    body.appendChild(rockButton)
    body.appendChild(scissorsButton)
    body.appendChild(paperButton)
    
    


