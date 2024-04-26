const max = prompt("Enter the max no");

const randomNo = Math.floor(Math.random() * max) + 1;

let guess = prompt("Please guess a number");
while (true) {
    if (guess == randomNo) {
        alert("Congratulations correct number guessed");
        break;
    }
    else if (guess > randomNo) {
        guess = prompt("hint: Your number is greater than MAX no.");
    }
    else {
        guess = prompt("hint: Your number is lesser than Max no.");
    }
}