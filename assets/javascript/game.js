var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l',
    'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessedLetters = []

var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guesses-left-text");
var guessesText = document.getElementById("guesses-text");


    var randomIndex = alphabet[Math.floor(Math.random() * alphabet.length)];
    var computerChoice = alphabet[randomIndex];

document.onkeyup = function(event) {
    var userGuess = event.key;

    if(userGuess === computerChoice){
        wins++;
        winsText.textContent = "Wins: " + wins;    
    }else{
        guessesLeft--;
        guessesLeftText.textContent = "Guesses Left: " + guessesLeft;
    }
    if(guessesLeft = 0){
        losses++;
        lossesText.textContent = "Losses: " + losses;
    }

    guessesText.textContent = "Your guesses so far: " + userGuess;

}
