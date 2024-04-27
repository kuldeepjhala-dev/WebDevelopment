//Expands an iteratable(array, string) into multiple values.
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(Math.min(...arr)); //op: 1
console.log(...arr); //op: 1 2 3 4 5 6 7 8 9 10

let arrCopy = [...arr];
console.log(...arrCopy); //op: 1 2 3 4 5 6 7 8 9 10

let chars = [..."hello"];
console.log(chars); //op: [ 'h', 'e', 'l', 'l', 'o' ]
console.log(chars[3]); //op: l

let odd = [2, 4, 6, 8];
let even = [1, 4, 5, 7, 9];

let nums = [...odd, ...even];
console.log(nums); //op: [ 2, 4, 6, 8, 1, 4, 5, 7, 9 ]
let nums2 = [...even, ...odd];
console.log(nums2);//op: [ 1, 4, 5, 7, 9, 2, 4, 6, 8]