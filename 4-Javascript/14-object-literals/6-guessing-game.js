//Q. User enters a max number & then tries to guess a random generated number between 1 to max.

let userGuessedValue = prompt("Please guess a number", 0);

let noLength = (userGuessedValue.toString().length);

if (noLength == 1) {
    noLength = 10;
}
else if (noLength == 2) {
    noLength = 100;
}
else if (noLength == 3) {
    console.log("Please enter small number");
}
else {
    console.log("else")
}

while (true) {
    if (userGuessedValue == ((Math.floor(Math.random() * noLength)) + 1)) {
        console.log("Successfull Guess");
        break;
    }
    else {
        console.log("Guess Again");
        userGuessedValue = prompt("now continue guess until its not previous number", 0);
    }
}
