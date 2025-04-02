const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click",() =>{
        playRound(button.id)

    })
})

function getComputerChoice(){
    let computerChoice = Math.random(); 
    if(computerChoice <=0.3){
        return "scissor"
    }else if(computerChoice<=0.66){
        return "paper"
    }else{
        return "rock"
    }
}

function playRound(humanChoice){
    const computerChoice = getComputerChoice();

    if (computerChoice == "rock"){
        if(humanChoice == "rock"){
            console.log("Draw!");
        }else if(humanChoice == "paper"){
            humanScore ++;
            console.log("You Win! Paper wins over Rock!");
        }else if((humanChoice == "scissor")){
            computerScore++;
            console.log("You Lose! Scissor wins over Rock!");
        }
    }else if(computerChoice == "paper"){
        if(humanChoice == "rock"){
            computerScore++;
            console.log("You Lose! Paper wins over Rock");
        }else if(humanChoice == "paper"){
            console.log("Draw!");
        }else if((humanChoice == "scissor")){
            humanScore ++;
            console.log("You Win! Scissor wins over Paper!");
        }
    }else if(computerChoice == "scissor"){
        if(humanChoice == "rock"){
            humanScore ++;
            console.log("You Win! Rock wins over Scissor");
        }else if(humanChoice == "paper"){
            computerScore++;
            console.log("You Lose! Scissor wins over Paper!");
        }else if((humanChoice == "scissor")){
            console.log("Draw");
        }
    }
}

function playGame(){
    let humanScore = 0
    let computerScore = 0;
    
}

