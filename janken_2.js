


const scoreDisplay = document.getElementById('scoreDisplay');
let humanScore = 0;
let computerScore = 0;
let humanSelection = "";



getComputerChoice = function(max){
    computerChoice =  Math.floor(Math.random() * max + 1);
    if (computerChoice === 1) {return "rock"};
    if (computerChoice === 2) {return "paper"};
    if (computerChoice === 3) {return "scissors"};
    return computerChoice;
}

// getHumanChoice = function(){
//     choice = parseInt(prompt('1.(rock) 2.(paper) 3.(scissors)'));
//     if (choice === 1) {return 'rock'};
//     if (choice === 2) {return 'paper'};
//     if (choice === 3) {return 'scissors'};
//     return choice;
// }

// getHumanChoice = function(){
//     if  (document.getElementById('getChoiceRock').addEventListener('click', () => {
//     const humanSelection = 'Rock';
//     console.log('You Selected: ', humanSelection);
//     }))    {return 'rock'};

//     if (document.getElementById('getChoicePaper').addEventListener('click', () => {
//     const humanSelection = 'Paper';
//     console.log('You Selected: ', humanSelection);
//     })) {return 'paper'};

//     if (document.getElementById('getChoiceScissors').addEventListener('click', () => {
//     const humanSelection = 'Scissors';
//     console.log('You Selected: ', humanSelection);
//     })) {return 'scissors'};
    
// }






function playGame(){
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice(3);        
        playRound(humanSelection, computerSelection);
    }
}

document.getElementById('getChoiceRock').addEventListener('click', () => {
    const humanSelection = 'Rock';
    console.log('You Selected: ', humanSelection);
});

document.getElementById('getChoicePaper').addEventListener('click', () => {
    const humanSelection = 'Paper';
    console.log('You Selected: ', humanSelection);
});

document.getElementById('getChoiceScissors').addEventListener('click', () => {
    const humanSelection = 'Scissors';
    console.log('You Selected: ', humanSelection);
});


function playRound(humanSelection, computerChoice) {
    if (humanSelection === 'rock' && computerChoice === 'scissors'){
        console.log('Human wins with ' + humanSelection, 'beating ' + computerChoice);
        humanScore ++;
    }else if (humanSelection === 'paper' && computerChoice === 'rock'){
        console.log('Human wins with ' + humanSelection, 'beating ' + computerChoice);
        humanScore ++;
    }else if (humanSelection === 'scissors' && computerChoice === 'paper'){
        console.log('Human wins with ' + humanSelection, 'beating ' + computerChoice);
        humanScore ++;
        
    }else if (computerChoice === 'rock' && humanSelection === 'scissors'){
        console.log('computer wins with ' + computerChoice, 'beating ' + humanSelection);
        computerScore ++;
    }else if (computerChoice === 'paper' && humanSelection === 'rock'){
        console.log('computer wins with ' + computerSelection, 'beating ' + humanSelection);
        computerScore ++;
    }else if (computerChoice === 'scissors' && humanSelection === 'paper'){
        console.log('computer wins with ' + computerChoice, 'beating ' + humanSelection);
        computerScore ++;
        
    }else{
        console.log('Both played ' + humanSelection)};
    };

const computerSelection = getComputerChoice(3);  
playRound(humanSelection, computerSelection);
scoreDisplay.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;
//console.log("computerScore = " + computerScore, "humanScore = " + humanScore);