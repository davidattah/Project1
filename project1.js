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
    let playerScore = 0;
    let computerScore = 0;
function playSingleRound(playerSelection, computerSelection){
        if(playerSelection === "rock" && computerSelection === "scissors") {
           playerScore +=1;
           div.textContent = (`You win ${playerSelection} beats ${computerSelection}! ${playerScore} : ${computerScore}.`)
        }else if(playerSelection === "paper" && computerSelection === "rock"){
           playerScore +=1;
           div.textContent = (`You win ${playerSelection} beats ${computerSelection}! ${playerScore} : ${computerScore}.`)
        }else if(playerSelection === "scissors" && computerSelection === "paper"){
           playerScore +=1;
           div.textContent = (`You win ${playerSelection} beats ${computerSelection}! ${playerScore} : ${computerScore}.`)
       }else if(computerSelection=== "rock" && playerSelection === "scissors"){
           computerScore +=1;
           div.textContent = (`You lose ${computerSelection} beats ${playerSelection}! ${playerScore} : ${computerScore}.`) 
       }else if(computerSelection === "paper" && playerSelection === "rock"){
               computerScore +=1;
               div.textContent = (`You lose ${computerSelection} beats ${playerSelection}! ${playerScore} : ${computerScore}.`)   
       }else if(computerSelection === "scissors" && playerSelection === "paper"){
               computerScore +=1;
               div.textContent = (`You lose ${computerSelection} beats ${playerSelection}! ${playerScore} : ${computerScore}.`) 
       }else if(playerSelection === computerSelection || computerSelection === playerSelection){
                div.textContent = (`It is a tie! ${playerScore} : ${computerScore}.`)
        } 

        if(playerScore == 5){
            div.textContent = (`You win! ${playerScore} : ${computerScore}.`)
            playerScore = 0;
            computerScore = 0;
          }else if(computerScore == 5){
            div.textContent = (`You lose! ${playerScore} : ${computerScore}.`)
            playerScore = 0;
            computerScore = 0;
          }
    
       }
   
       const body = document.querySelector("body")
       const rockButton = document.createElement("button")
       const scissorsButton = document.createElement("button")
       const paperButton = document.createElement("button")
       body.appendChild(rockButton)
       body.appendChild(scissorsButton)
       body.appendChild(paperButton)
   
       rockButton.id = "rock"
       scissorsButton.id = "scissors"
       paperButton.id = "paper"
   
       const buttons = document.querySelectorAll("button")
       buttons.forEach((button)=>{
           button.addEventListener("click",(event)=>{
               buttonClicked = event.target.id
               if(buttonClicked === rockButton.id){
                   playerSelection = "rock"
               }else if(buttonClicked === scissorsButton.id){
                   playerSelection = "scissors"
               }else if(buttonClicked === paperButton.id){
                   playerSelection = "paper"
               }
               playSingleRound(buttonClicked,getComputerChoice())
           })
       })

       const div = document.createElement("div")
       body.appendChild(div)
       

  
     

    
