//conditional Statement

//if condition
console.log("before my if statement");
let age = 22;
if (age >= 18) {
    console.log("you can vote");
    console.log("you can drive");
    console.log(5 * 8);
}
if (age < 18) {
    console.log("you cannot vote");
}
console.log("after my if statement");

let firstName = "kuldeep";
if (firstName == "kuldeep") {
    console.log(`welcome ${firstName}`);
}

//else-if condition
age = 14;
if (age < 18) {
    console.log("your age is less then 18");
}
else if (age == 18) {
    console.log("your age is 18");
}
else if (age > 18) {
    console.log("your age is greater than 18");
}

let marks = 99;
if (marks >= 80) {
    console.log("A++");
}
else if (marks >= 60) {
    console.log("A");
}
else if (marks >= 33) {
    console.log("B");
}
else if (marks < 33) {
    console.log("F");
}

let month = "january";

if (month === "january") {
    console.log("winter is here");
} else if (month === "april") {
    console.log("summer is here");
}

//if-else
age = 19;
if (age <= 18) {
    console.log("you cannot vote");
}
else {
    console.log("you can vote");
}

//nested if-else
marks = 45;

if (marks >= 33) {
    console.log("PASS");
    if (marks >= 80) {
        console.log("GRADE : O");
    } else {
        console.log("GRADE : A");
    }
} else {
    console.log("Better luck next time");
}

