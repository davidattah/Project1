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

let numberOfGames = 0;
function game(){
    for(i = 0; i < 5; i++){
    playSingleRound(getPlayerChoice(),getComputerChoice())
    numberOfGames +=1
}
    if(numberOfGames == 5){

        if(playerScore > computerScore){
            console.log(`You win!  ${playerScore} : ${computerScore}.`)
        }else if(computerScore > playerScore){
           console.log(`You lose!  ${playerScore} : ${computerScore}.`)
        }else{
           console.log(`It is a tie! ${playerScore} : ${computerScore}.`)
        }
        numberOfGames = 0
        playerScore = 0
        computerScore = 0
}
}


