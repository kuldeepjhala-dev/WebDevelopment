//What is the value of age after this code runs? => 23
let age = 23;
console.log(age + 2); //op: 25
console.log(age); //op: 23

//what is the value of avg after this code runs? => 90
let hindi = 80;
let eng = 90;
let math = 100;
let avg = (hindi + eng + math) / 3;
console.log(avg); //op: 90

//what is the value of variable in each line of code?
let num = 5;
console.log("num:", num); //op: num: 5
let newNum = num++;
console.log("num:", num, "newNum:", newNum); //op: num: 6 newNum: 5
newNum = ++num;
console.log("num:", num, "newNum:", newNum); //op: num: 7 newNum: 7

//Declare your name as a string and print its length in js?
let myName = "kuldeepsinh H Jhala"
console.log("Lenght of name : " + myName.length); //op: 19

//Declare your first name as a string and print its last character
let firstName = "kuldeep";
console.log(firstName[0]); //op: k

//Declare your first name as a string and print its last character
console.log(firstName[firstName.length - 1]); //op: p

//What is output of following code ' "apnacollege"+123 '.
console.log("apnacollege" + 123); //op: apnacollege123

//What are length pf an empty string & a string with a single space?
let emptyStr = "";
let spaceStr = " ";
console.log("empty string length:" + emptyStr.length); //op: 
console.log("single space string length:" + spaceStr.length); //op: 1