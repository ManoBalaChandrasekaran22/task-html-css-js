//number guessing(0-5)//
let secretNumber = Math.floor(Math.random() * 6);
function guessNumber() {
  let userGuess = parseInt(prompt("Guess a number between 0 and 5: "));
  if (userGuess === secretNumber) {
    alert(" Congratulations! You guessed the correct number!");
  } else {
    alert(`Sorry, your guess is incorrect. The correct answer is ${secretNumber}.`);
  }
}
guessNumber();