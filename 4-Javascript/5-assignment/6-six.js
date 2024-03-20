//Write a program to check if 2 numbers have the same last digit.

let num1 = 2382;
let num2 = 33242;

num1 = num1.toString();
num2 = num2.toString()

if (num1[num1.length - 1] === num2[num2.length - 1]) {
    console.log("num1 and num2 has same last digit which is", num1[num1.length - 1]);
}
else {
    console.log("num1  and num2 dont have the same last digit");
}

//------------or--------------

let num3 = 2323;
let num4 = 3233;

if (num3 % 10 === num4 % 10) {
    console.log("same last number");
}
else {
    console.log("Not same last number");
}