

function selectMove() {
    const num = Math.floor(Math.random() *3) + 1;
    if (num === 1) {
        return {name: 'rock', moveVal: 1 };
    } else if ( num === 2) {
        return {name: 'paper', moveVal: 2};
    } else {
        return {name: 'scissors', moveVal: 3};
    }
    
}

// Create Players
const player1 = {
    victories: 0,
    move: selectMove.name,
    moveVal: selectMove.moveVal
};

const player2 = {
    victories: 0,
    move: selectMove.name,
    moveVal: selectMove.moveVal
};




let determineWinner = function() {
    let winner = 'tie';
    while (winner === 'tie'){
        const move1 = selectMove();
        const move2 = selectMove();
        player1.move = move1.name;
        player2.move = move2.name;
        
        if (player1.move === "rock" && player2.move === "scissors"){
            winner = "player1";
        } else if (player1.move === "paper" && player2.move === "rock"){
            winner = "player1";
        } else if (player1.move === "scissors" && player2.move === "paper"){
            winner = "player1";
        }else if (player1.move === player2.move){
            winner = "tie";
        }else{
            winner = "player2";
        }
    }
    return winner;
}




for(i = 0; i<5; i++) {
    const move1 = selectMove();
    const move2 = selectMove();
    player1.move = move1.name;
    player2.move = move2.name;
    
    
    console.log('Player1 chose: ' + player1.move)
    console.log('Player2 chose: ' + player2.move)
    console.log('Winner is: ' + determineWinner())
    //upDateVictoryCounter()
    // console.log('overall winner is1: ' + player1.victories)
    // console.log('overall winner is2: ' + player2.victories)
};









// let whoWon = determineWinner();

// console.log(whoWon);
// let upDateVictoryCounter = function(whoWon) {
//     console.log('testing');
// }