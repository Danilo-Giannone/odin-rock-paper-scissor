
function getComputerChoice(){
    let computerChoice = Math.random(); 
    if(computerChoice <=0.33){
        return "scissor"
    }
    else if(0.33<choice<=0.66){
        return "paper"
    }
    else{
        return "rock"
    }
}

function getHumanChoice(){
    return prompt("Chose rock paper or scissor")
}
