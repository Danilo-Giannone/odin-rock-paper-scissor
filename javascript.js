playGame();
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

function getHumanChoice(){
    return prompt("Chose rock paper or scissor").toLowerCase();
}

function playGame(){
    let humanScore = 0
    let computerScore = 0;
    const rounds = 5;

    for(let i=0;i<rounds;i++){
        playRound();
        console.log("human: " + humanScore);
        console.log("computer: " + computerScore);
        
    }
    function playRound(){
        const humanChoice = getHumanChoice()
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
}

