const randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#submit");
const userGuess = document.querySelector("#guess");
const pastGuesses = document.querySelector(".guesses");
const guessesRemaining = document.querySelector(".lastResult");
const lowOrHigh = document.querySelector(".lowOrHigh");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
	submit.addEventListener("click", function (e) {
		e.preventDefault();
		const guess = parseInt(userGuess.value);
		validateGuess(guess);
	});
}

function validateGuess(guess) {
	if (isNaN(guess)) {
		alert("Enter a valid number!");
	} else if (guess < 1) {
		alert("Enter a number in the range 1 - 100!");
	} else if (guess > 100) {
		alert("Enter a number in the range 1 - 100!");
	} else {
		prevGuess.push(guess);
		if (numGuess == 10) {
			displayGuess(guess);
			displayMessage(`Game Over! ${randomNumber} is the correct guess`);
			endGame();
		} else {
			displayGuess(guess);
			checkGuess(guess);
		}
	}
}

function checkGuess(guess) {
	if (guess === randomNumber) {
		displayMessage(`You guessed it right!`);
		endGame();
	} else if (guess < randomNumber) {
		displayMessage(`Number is high!`);
	} else if (guess > randomNumber) {
		displayMessage(`Number is low!`);
	}
}

function displayGuess(guess) {
	userGuess.value = "";
	pastGuesses.innerHTML += `${guess}-`;
	guessesRemaining.innerHTML = `${10 - numGuess}`;
	numGuess++;
}

function displayMessage(message) {
	lowOrHigh.innerHTML = `<h2 class="text-xl my-2 text-center">${message}</h2>`;
}

function endGame() {
    userGuess.value = "";
    userGuess.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<button class="text-center my-3 bg-blue-600 px-2 py-1 rounded-md" id='newGame'>Start new game</button>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame() {
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function(e){
        location.reload()
    })
}
