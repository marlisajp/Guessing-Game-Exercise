// window.onload = function(){

//TODO Get Variables

let title = document.getElementById("title");
let instructions = document.getElementById("instructions");
let feedback = document.getElementById("feedback");
let textBar = document.getElementById("textBar");
let submitAnswer = document.getElementById("submitAnswer");
let allGuesses = document.getElementById("all-guesses");
let guess = document.getElementsByClassName("guess");
let reset = document.getElementById("reset");
let userInput = [textBar.value];
//to add items to the array use push.arrayName to add the new userInput values to the array.  The array will be used to capture and print the values on screen as part of the ul. Possibly a for loop.

//TODO 1: COMPLETED. A winning number between 1-100 will be randomly generated.

let randomNum = Math.ceil(Math.random() * 100);

//TODO 2: COMPLETED. The player inputs their guess in a text input field.
    //Accept user input as keyboard event for the guess. This may be an addEventListener to capture the data entered.
    //add event listener {}

submitAnswer.addEventListener("click", function(){
    userInput = textBar.value;
})

//Create a function to measure the difference between the user stated value and the randomNum.  Uses conditional logic to return if higher or lower than the randomNum.
    //Compares the value the user entered to the random number.
function compare (userInput) {
    if (userInput === randomNum) {
        console.log("Correct!");
    }else if (userInput > randomNum) {
            console.log("Guess lower")
        } else {
            console.log("Guess higher")
        }
    }

//TODO 3. The player clicks a button to submit their guess.



//TODO 4. Write one larger function that captures each guess and log the number of entries.  Limit the number of entries to five.  After five guesses return a you loose statement. 


// }

