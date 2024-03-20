//Write a JavaScript program to test whether the character at the given (character) index is lower case.

let str = "HelloX";
let char = 5;

if (str[char] == str[char].toLocaleLowerCase()) {
    console.log("LowerCase");
}
else {
    console.log("UpperCase");
}