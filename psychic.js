//variables

// array holding all letters
var alphabetLetters =  ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//empty array holding letters guessed
//add every letter guessed by user in here?
//append?????
var lettersGuessed = [];

//varianble prompting user to guess
var guess;

var wins = 0;
var losses = 0;


var letterToBeGuessed = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];
var correctlyGuessed = false


  while (correctlyGuessed == false) {

    var guess = prompt("Guess a letter: (a-z)")

    //compare user guess with correct letter
    if (guess == letterToBeGuessed) {
      alert("You've guessed correctly");
      correctlyGuessed = true;
      wins = wins + 1;
    } else {
      alert("Miss! Guess again");
      losses = losses + 1;
    } //if end



  } //while loop end
document.write("wins:" + wins + "<br>" + " losses: " + losses)
