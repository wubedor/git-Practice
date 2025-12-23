let randomNumber = Math.ceil(Math.random() * 10);
let attempts = 3;

function checkGuess (){
 let guess = Number(document.getElementById("guessInput").value);
 let message = document.getElementById("message");

if (guess === randomNumber){
    message.innerHTML = "Congrtulations! You guessed the correct number."
}else if (guess < randomNumber) {
    message.innerHTML = "Your guess is too low. Try again.";
    attempts--;
} else {
    message.innerHTML = "Your gues is too high. Try again.";
    attempts--;
}
}

function resetGame(){
    randomNumber = Math.ceil(Math.random() * 10);
    attempts=3;
document.getElementById('message').textContent="";
document.getElementById('guessInput').value ="";

}

