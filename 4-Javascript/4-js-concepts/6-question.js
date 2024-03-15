//A "good string" is a string that start with the letter 'a' & has a length > 3. Write a program to find if a string is good or not.
let str1 = "abcde"; //good string
let str2 = "ab"; //bad string
let str3 = "cbcde"; //bad string
let str4 = "xe"; //bad string
let str5 = "a"; //bad string
let str6 = "aaaa"; //good string
let str7 = "Abcde";  //bad string

let check_str = str7;

console.log("length : ", check_str.length);
console.log("firstChar : ", check_str[0]);

if (((check_str.length) > 3) && (check_str[0] === 'a')) {
    console.log("Good string");
}
else {
    console.log("Bad string");
}

//predict the output of the following code => safe
let num = 12;

if ((num % 3 === 0) && ((num + 1 == 15) || (num - 1 == 11))) {
    console.log("safe");
} else {
    console.log("unsafe");
}
