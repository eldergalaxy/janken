


const scoreDisplay = document.getElementById('scoreDisplay');
const colorComment = document.getElementById('commentary');
let humanScore = 0;
let computerScore = 0;

getComputerChoice = function(max){
    computerChoice =  Math.floor(Math.random() * max + 1);
    if (computerChoice === 1) {return "rock"};
    if (computerChoice === 2) {return "paper"};
    if (computerChoice === 3) {return "scissors"};
    return computerChoice;
};
let computerSelection = getComputerChoice(3);        

// function playGame(){
    //     for (let i = 0; i < 5; i++) {
        //         const humanSelection = getHumanChoice();
        //         playRound(humanSelection, computerSelection);
        //     }
        // }
        
        document.getElementById('getChoiceRock').addEventListener('click', () => {
            const humanSelection = 'rock';
            const computerSelection = getComputerChoice(3);
            playRound(humanSelection, computerSelection);
            colorComment.textContent = `You Played: ${humanSelection} | Computer Played: ${computerSelection}`;
            scoreDisplay.textContent = `Human: ${humanScore} | Computer: ${computerScore}`; 
            console.log('Yous Selected: ', humanSelection);
        });
        
        document.getElementById('getChoicePaper').addEventListener('click', () => {
            const humanSelection = 'paper';
            const computerSelection = getComputerChoice(3);
            playRound(humanSelection, computerSelection);
            colorComment.textContent = `You Played: ${humanSelection} | Computer Played: ${computerSelection}`;
            scoreDisplay.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;
            console.log('Yous Selected: ', humanSelection);
        });
        
        document.getElementById('getChoiceScissors').addEventListener('click', () => {
            const humanSelection = 'scissors';
            const computerSelection = getComputerChoice(3);
            playRound(humanSelection, computerSelection);
            colorComment.textContent = `You Played: ${humanSelection} | Computer Played: ${computerSelection}`;
            scoreDisplay.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;
            console.log('Yous Selected: ', humanSelection);
        });
               
        function playRound(humanSelection, computerChoice) {
            if (humanSelection === 'rock' && computerChoice === 'scissors'){
                console.log('Human wins with ' + humanSelection, 'beating ' + computerChoice);
                humanScore ++;
                console.log("computerScore = " + computerScore, "humanScore = " + humanScore);
               
            }else if (humanSelection === 'paper' && computerChoice === 'rock'){
                console.log('Human wins with ' + humanSelection, 'beating ' + computerChoice);
                humanScore ++;
                console.log("computerScore = " + computerScore, "humanScore = " + humanScore);
                
            }else if (humanSelection === 'scissors' && computerChoice === 'paper'){
                console.log('Human wins with ' + humanSelection, 'beating ' + computerChoice);
                humanScore ++;
                console.log("computerScore = " + computerScore, "humanScore = " + humanScore);
            
            }else if (computerChoice === 'rock' && humanSelection === 'scissors'){
                console.log('computer wins with ' + computerChoice, 'beating ' + humanSelection);
                computerScore ++;
                console.log("computerScore = " + computerScore, "humanScore = " + humanScore);
                
            }else if (computerChoice === 'paper' && humanSelection === 'rock'){
                console.log('computer wins with ' + computerSelection, 'beating ' + humanSelection);
                computerScore ++;
                console.log("computerScore = " + computerScore, "humanScore = " + humanScore);
                
            }else if (computerChoice === 'scissors' && humanSelection === 'paper'){
                console.log('computer wins with ' + computerChoice, 'beating ' + humanSelection);
                computerScore ++;
                console.log("computerScore = " + computerScore, "humanScore = " + humanScore);
                                
            }else{
                console.log('Both played ' + humanSelection)};
            };

console.log("computerScore = " + computerScore, "humanScore = " + humanScore);