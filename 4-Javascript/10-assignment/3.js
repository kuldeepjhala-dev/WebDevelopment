//Write a JavaScript program to check whether a string is blank or not.

let str1 = "";
let str2 = "hello";

let value = str1;

if (value == "") {
    console.log("Empty");
}
else {
    console.log("Not Empty");
}

if (value[0] == undefined) {
    console.log("Empty");
}
else {
    console.log("Not Empty");
}

if (value.length == 0) {
    console.log("Empty");
}
else {
    console.log("Not Empty");
}   