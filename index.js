window.onload = function(){

//TODO Get Variables

let title = document.getElementById("title");
let instructions = document.getElementById("instructions");
let feedback = document.getElementById("feedback");
let textBar = document.getElementById("textBar");
let submitAnswer = document.getElementById("submitAnswer");
let allGuesses = document.getElementById("all-guesses");
let guess = document.getElementsByClassName("guess");
let reset = document.getElementById("reset");

//TODO 1. A winning number between 1-100 will be randomly generated.

let randomNum = Math.ceil(Math.random() * 100);
while (randomNum <= 100 && randomNum > 1){
    
}

//TODO 2. The player inputs their guess in a text input field.



//TODO 3. The player clicks a button to submit their guess.

//add event listener {}
// IF If the player guesses the winning number, they win! Otherwise, they are allowed to try again.
// ELSE The game should give a hint after each guess, letting them know whether to guess higher or lower as well as how close they are.
// ELSE After five unsuccessful guesses, the game is over and the player loses.




}

