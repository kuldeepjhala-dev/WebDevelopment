console.log("a" == "a"); //op: true
console.log("a" === "a"); //op: true

console.log(1 == 1); //op: true
console.log(1 === 1); //op: true

console.log([1] == [1]); //op: false
console.log([1] === [1]); //op: false

let arr = [1, 2, 3];
let arrCopy = arr;
console.log(arr == arrCopy); //op: true
console.log(arr === arrCopy); //op: true

console.log(arr); //op: [ 1, 2, 3 ]
console.log(arrCopy); //op: [ 1, 2, 3 ]

arr.push(4);

console.log(arr); //op: [ 1, 2, 3, 4 ]
console.log(arrCopy); //op: [ 1, 2, 3, 4 ]

arrCopy.pop();

console.log(arr); //op: [ 1, 2, 3 ]
console.log(arrCopy); //op: [ 1, 2, 3 ]

arrCopy = [9, 8, 7];
console.log(arrCopy); //op: [ 9, 8, 7 ]

console.log(arr == arrCopy); //op: false
console.log(arr === arrCopy); //op: false   