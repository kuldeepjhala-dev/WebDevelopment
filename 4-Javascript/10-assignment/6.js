//Write a JavaScript program to check if an element exists in an array or not.
let arr = ['a', 'b', 'c', 'd', 'e'];
let search1 = 'x';
let search2 = 'a';

console.log(arr.includes(search1)); //op: false
console.log(arr.includes(search2)); //op: true

console.log(arr.indexOf(search1) != -1); //op: false
console.log(arr.indexOf(search2) != -1); //op: true