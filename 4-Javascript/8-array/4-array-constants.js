//array constants

const arr = [1, 2, 3];

console.log(arr); //op: [ 1, 2, 3 ]
arr.push(4); 
console.log(arr); //op: [ 1, 2, 3, 4 ]
arr.pop(); 
console.log(arr); //op: [ 1, 2, 3 ]
arr.pop();
console.log(arr); //op: [ 1, 2 ]

// arr = ['x', 'y', 'z']; Generates ERROR becasue 'reference address of constant array cannot be changed'