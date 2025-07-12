


let humanScore = 0;
let computerScore = 0;




getComputerChoice = function(max){
    computerChoice =  Math.floor(Math.random() * max + 1);
     parseInt(computerChoice);
    if (computerChoice === 1) {return "rock"};
    if (computerChoice === 2) {return "paper"};
    if (computerChoice === 3) {return "scissors"};
    return computerChoice;
}

getHumanChoice = function(){
    choice = parseInt(prompt('1.(rock) 2.(paper) 3.(scissors)'));
    if (choice === 1) {return 'rock'};
    if (choice === 2) {return 'paper'};
    if (choice === 3) {return 'scissors'};
    return choice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === 'rock' && computerChoice === 'scissors'){
        console.log('Human wins with ' + humanChoice, 'beating ' + computerChoice);
    }else if (humanChoice === 'paper' && computerChoice === 'rock'){
        console.log('Human wins with ' + humanChoice, 'beating ' + computerChoice);
    }else if (humanChoice === 'scissors' && computerChoice === 'paper'){
        console.log('Human wins with ' + humanChoice, 'beating ' + computerChoice);
    
    }else if (computerChoice === 'rock' && humanChoice === 'scissors'){
        console.log('computer wins with ' + computerChoice, 'beating ' + humanChoice);
    }else if (computerChoice === 'paper' && humanChoice === 'rock'){
        console.log('computer wins with ' + computerChoice, 'beating ' + humanChoice);
    }else if (computerChoice === 'scissors' && humanChoice === 'paper'){
        console.log('computer wins with ' + computerChoice, 'beating ' + humanChoice);

    }else{
        console.log('Both played ' + humanChoice)};
}


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice(3);

playRound(humanSelection, computerSelection);
// console.log('human choice ' + humanSelection);
// console.log('computer choice ' + computerSelection);