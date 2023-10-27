const buttons = document.querySelectorAll('button')

const gameResult = document.getElementById('result')

let playerScore = 0
let computerScore = 0

const playerpoints = document.getElementById('user-score');
const computerpoints = document.getElementById('computer-score');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const result = gameRound(button.id, computerPlay())
        gameResult.textContent = result;
    });
});

function computerPlay() {
    const options = ['rock', 'paper', 'scissors']
    const choise = Math.floor(Math.random() * options.length)
    return options[choise]
}

function gameRound(playerchoise, computerchoise){
    if ( playerchoise === computerchoise){
        return "It's a Tie!"
    }
    else if(
        playerchoise === 'rock' && computerchoise === 'scissors' || 
        playerchoise === 'scissors' && computerchoise === 'paper' ||
        playerchoise === 'paper' && computerchoise === 'scissors'
    ){
        playerScore++;
        playerpoints.textContent = playerScore;
        return 'You Won! 🎉 ' + playerchoise + ' beats ' + computerchoise;
    }
    else{
        computerScore++;
        computerpoints.textContent = computerScore
        return 'You Lost! 👎 ' + computerchoise + ' beats ' + playerchoise;
    }
}

