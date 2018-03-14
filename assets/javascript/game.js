var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
 var wins = 0;
 var losses = 0;
 var guessesleft = 10;

//computer chooses a random letter
var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

//print to log just in case
console.log(computerChoice);


    // This function is run whenever a key is pressed
    document.onkeyup = function(event) {

        // Determines which key was pressed.
        var userGuess = event.key;

        if (userGuess === computerChoice) {
            wins = wins + 1;
            document.getElementById("wins").textContent = wins;
            guessesleft = 10;
            alert("yay, you guessed right!");
            computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
            console.log(computerChoice);
            document.getElementById("guesses").innerHTML = " ";
            document.getElementById("playagain").innerHTML = "Press any key to play again";

        }

        else if (guessesleft===0) {
            losses = losses + 1;
            alert("sorry, you lost!");
            guessesleft=10;
            document.getElementById("losses").textContent = losses;

            computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
            console.log(computerChoice);
            document.getElementById("guesses").innerHTML = " "    ;
            document.getElementById("playagain").innerHTML = "Press any key to play again";
            document.getElementById("guessleft").innerHTML = "10"    ;

        }


        else {
            document.getElementById("guesses").innerHTML+= userGuess;
            guessesleft = guessesleft-1;
            document.getElementById("guessleft").textContent = guessesleft;
            document.getElementById("playagain").innerHTML = " ";

        }
    }
