
function getComputerChoice(){
    let choice = Math.random(); 
    if(choice <=0.33){
        return "scissor"
    }
    else if(0.33<choice<=0.66){
        return "paper"
    }
    else{
        return "rock"
    }
}
