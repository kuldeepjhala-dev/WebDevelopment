function hello() {
    console.log("Hii this is my function");
}

hello(); //op: Hii this is my function
hello(); //op: Hii this is my function

function printName() {
    console.log("kuldeep");
    console.log("jhala");
}

printName(); //op: kuldeep jhala

function print1to5() {
    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }
}

print1to5(); //op: 1 2 3 4 5

function isAdult() {
    const age = 21;
    if (age < 18) {
        console.log("Not an adult");
    }
    else {
        console.log("Adult");
    }
}

isAdult(); //op: Adult

function printPoem() {
    console.log("Twinkle twinkle little star,");
    console.log("How I wonder what you are");
}

printPoem(); //op: Twinkle twinkle little star, How I wonder what you are

function diceRolled() {
    console.log((Math.floor(Math.random() * 6)) + 1);
}

diceRolled(); //op: 3 (random between 1 - 6)
diceRolled(); //op: 6 (random between 1 - 6)
diceRolled(); //op: 5 (random between 1 - 6)
diceRolled(); //op: 5 (random between 1 - 6)
diceRolled(); //op: 5 (random between 1 - 6)

//Funcitons with arguments

function printName(name) {
    console.log(name);
}

printName("kuldeep"); //op: kuldeep

function printName2(name, age) {
    console.log(name, age);
}

printName2("kuldeep", 20); //op: kuldeep 20
printName2("kuldeep"); //op: kuldeep undefined

function addSum(no1, no2) {
    if (no1 === undefined) {
        console.log("Enter number-1 and number-2 (no1,no2)");
    }
    else if (no2 === undefined) {
        console.log(`Enter number-2 (${no1},no2)`);
    }
    else {
        console.log(no1 + no2);
    }
}

addSum(); //op: Enter number-1 and number-2 (no1,no2)
addSum(10); //op: Enter number-2 (10,no2)
addSum(100, 400); //op: 500

//create a function that gives us the average of 3 numbers
function avgOf3No(a, b, c) {
    console.log(((a + b + c) / 3));
}

avgOf3No(1, 2, 3); //op: 2

function printAnyTable(no) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${no} * ${i} = ${i * no}`);
    }
}

printAnyTable(300);

//op:
// 3 * 1 = 3
// 3 * 2 = 6
// 3 * 3 = 9
// 3 * 4 = 12
// 3 * 5 = 15
// 3 * 6 = 18
// 3 * 7 = 21
// 3 * 8 = 24
// 3 * 9 = 27
// 3 * 10 = 30

function sum(a, b) {
    return a + b;
}

console.log(sum(sum(10, 20), 30)); //op: 60

//create a function that returns the sum of numbers from 1 to n.
function onetoNSum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum = sum + i;
    }
    return sum;
}

console.log(onetoNSum(10)); //op: 55

//create a function that returns the concatation of all strings in an array.
function joinStrings(str1, str2, str3, str4, str5) {
    let arr = [str1, str2, str3, str4, str5];
    return arr;
}

let strGroupArr = joinStrings("hello", "my", "name", "is", "kuldeep");
console.log(strGroupArr); //op: [ 'hello', 'my', 'name', 'is', 'kuldeep' ]

//create a function that takes argument as array and return a string from the string values of the array.
function printString(strArr) {
    let str = "";
    for (let i = 0; i < strArr.length; i++) {
        str = str + strArr[i] + " ";
    }
    return str;
}

let str = printString(strGroupArr);
console.log(str); //op: hello my name is kuldeep

