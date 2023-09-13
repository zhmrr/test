const prompt = require('prompt-sync')({sigint: true});
 
const name = prompt ('What is your name?');
console.log (`Hey there ${name}, Lets play a number guessing game with me.`);

let playAgain ='Y';

while (playAgain === 'Y') {
// Random number from 1 - 100
let numberInMind = Math.floor(Math.random() * 100) + 1;

// This variable is used to determine if the app should continue prompting the user for input
let foundCorrectNumber = false;

 
while (!foundCorrectNumber) {
  // Step 1: Get user input (don't forget that the input is a string)
  const guess = prompt('I have a number in mind. Guess a number between 1 to 100: ');

//convert the users input into string
const userGuess = parseInt (guess);

  // Step 2: Compare the guess to the secret answer and
  // let the user know the feedback (too large, too small, correct).
if (userGuess === numberInMind){
  console.log("Congratulations! You guessed the correct number!");
   foundCorrectNumber = true;
} else if (userGuess < numberInMind) {
  console.log ("It's too small. Next guess?");
} else {
  console.log ("It's too big. Next guess?");
}  
}

playAgain = prompt ("Do you want to play again? (Y/N)")
}

console.log("Thanks for playing!");

// Bonus Point: prompt user and provide option for user to start a new game after winning