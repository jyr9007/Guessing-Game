let randomNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 0;

document.getElementById("guessButton").addEventListener("click", function () {
  let guess = parseInt(document.getElementById("guessInput").value);
  attempts++;

  if (guess > randomNumber) {
    document.getElementById("feedback").textContent = "Your guess is too high. Try again!";
  } else if (guess < randomNumber) {
    document.getElementById("feedback").textContent = "Your guess is too low. Try again!";
  } else if (guess === randomNumber) {
    document.getElementById("feedback").textContent = "Correct! You guessed the number!";
    document.getElementById("attempts").textContent = `It took you ${attempts} guesses.`;
  } else {
    document.getElementById("feedback").textContent = "Please enter a valid number.";
  }
});
