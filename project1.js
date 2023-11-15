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
           result.textContent = (`You win ${playerSelection} beats ${computerSelection}!  Player Score : ${playerScore} vs Computer Score : ${computerScore}.`)
        }else if(playerSelection === "paper" && computerSelection === "rock"){
           playerScore +=1;
           result.textContent = (`You win ${playerSelection} beats ${computerSelection}!  Player Score : ${playerScore} vs Computer Score : ${computerScore}.`)
        }else if(playerSelection === "scissors" && computerSelection === "paper"){
           playerScore +=1;
           result.textContent = (`You win ${playerSelection} beats ${computerSelection}!  Player Score : ${playerScore} vs Computer Score : ${computerScore}.`)
       }else if(computerSelection=== "rock" && playerSelection === "scissors"){
           computerScore +=1;
           result.textContent = (`You lose ${computerSelection} beats ${playerSelection}!  Player Score : ${playerScore} vs Computer Score : ${computerScore}.`) 
       }else if(computerSelection === "paper" && playerSelection === "rock"){
               computerScore +=1;
               result.textContent = (`You lose ${computerSelection} beats ${playerSelection}!  Player Score : ${playerScore} vs Computer Score : ${computerScore}.`)   
       }else if(computerSelection === "scissors" && playerSelection === "paper"){
               computerScore +=1;
               result.textContent = (`You lose ${computerSelection} beats ${playerSelection}!  Player Score : ${playerScore} vs Computer Score : ${computerScore}.`) 
       }else if(playerSelection === computerSelection || computerSelection === playerSelection){
        result.textContent = (`It is a tie!  Player Score : ${playerScore} vs Computer Score : ${computerScore}.`)
        } 

        if(playerScore == 5){
            result.textContent = (`You win! Player Score : ${playerScore} vs Computer Score : ${computerScore}.`)
            reset();
          }else if(computerScore == 5){
            result.textContent = (`You lose! Player Score : ${playerScore} vs Computer Score : ${computerScore}.`)
            reset();
          }
    
       }

       function reset(){
            playerScore = 0
            computerScore = 0;
       }
       
       const body = document.querySelector("body")
       const container = document.createElement("div")
       container.classList.add("container")
       body.appendChild(container)

       const buttonContainer = document.createElement("div") 
       buttonContainer.classList.add("button-container")
       container.appendChild(buttonContainer)

       const rockButton = document.createElement("button")
       const scissorsButton = document.createElement("button")
       const paperButton = document.createElement("button")
       const resetButton = document.createElement("button")
       buttonContainer.appendChild(rockButton)
       buttonContainer.appendChild(scissorsButton)
       buttonContainer.appendChild(paperButton)
       buttonContainer.appendChild(resetButton)

       rockButton.textContent = "Rock"
       scissorsButton.textContent = "Scissors"
       paperButton.textContent = "Paper"
       resetButton.textContent = "Reset"
   
       rockButton.id = "rock"
       scissorsButton.id = "scissors"
       paperButton.id = "paper"
       resetButton.id= "reset"
   
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
               }else if(buttonClicked = resetButton.id){
                reset();
                result.textContent = ""
               }
               playSingleRound(buttonClicked,getComputerChoice())
           })
       })

       const resultContainer = document.createElement("div")
       container.appendChild(resultContainer)
       resultContainer.classList.add("result-container")
       const result = document.createElement("div")
       result.classList.add("result")
       resultContainer.appendChild(result)



  
     

    
