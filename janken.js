


const scoreDisplay = document.getElementById('scoreDisplay');
const colorComment = document.getElementById('commentary');
const whoWon = document.getElementById("whoWon");
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
                checkWhoWon()
               
            }else if (humanSelection === 'paper' && computerChoice === 'rock'){
                console.log('Human wins with ' + humanSelection, 'beating ' + computerChoice);
                humanScore ++;
                console.log("computerScore = " + computerScore, "humanScore = " + humanScore);
                checkWhoWon()
                
            }else if (humanSelection === 'scissors' && computerChoice === 'paper'){
                console.log('Human wins with ' + humanSelection, 'beating ' + computerChoice);
                humanScore ++;
                console.log("computerScore = " + computerScore, "humanScore = " + humanScore);
                checkWhoWon()
            
            }else if (computerChoice === 'rock' && humanSelection === 'scissors'){
                console.log('computer wins with ' + computerChoice, 'beating ' + humanSelection);
                computerScore ++;
                console.log("computerScore = " + computerScore, "humanScore = " + humanScore);
                checkWhoWon()
                
            }else if (computerChoice === 'paper' && humanSelection === 'rock'){
                console.log('computer wins with ' + computerSelection, 'beating ' + humanSelection);
                computerScore ++;
                console.log("computerScore = " + computerScore, "humanScore = " + humanScore);
                checkWhoWon()
                
            }else if (computerChoice === 'scissors' && humanSelection === 'paper'){
                console.log('computer wins with ' + computerChoice, 'beating ' + humanSelection);
                computerScore ++;
                console.log("computerScore = " + computerScore, "humanScore = " + humanScore);
                checkWhoWon()};
                
                // else{
                // console.log('Both played ' + humanSelection)};
            };


function checkWhoWon() {            
    if (humanScore > 5) {
        whoWon.textContent = 'Human Won!';
    } else if (computerScore > 5) {
        whoWon.textContent = 'Computer Won!';
    };
};
console.log("computerScore = " + computerScore, "humanScore = " + humanScore);