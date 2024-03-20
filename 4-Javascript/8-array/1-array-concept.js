//array(data-structure)

let students = ["kuldeep", "jay", "dishank"];
console.log(students); //op: [ 'kuldeep', 'jay', 'dishank' ]

let nums = [2, 4, 6, 8];
console.log(nums); //op: [ 2, 4, 6, 8 ]
console.log(nums[0]); //op: 2
console.log(nums[4]); //op: undefined
console.log(nums.length); //op: 4
console.log(typeof nums); //op: 'object'

let marks = [99, 89, 67, 42, 100];
console.log(marks); //op: [ 99, 89, 67, 42, 100 ]

let info = ["kuldeep", 21, 87.5];
console.log(info[0]); //op: kuldeep
console.log(info[1]); //op: 21
console.log(info[2]); //op: 87.5
console.log(info[0].length); //op: 7
console.log(info[0][0]); //op: k
console.log(info[0][4]); //op: e
console.log(info[0][6]); //op: p

//empty array
let empArr = [];
console.log(empArr.length); //op: 0

//multable array
let fruits = ["mango", "apple", "litichi"];
console.log("before update: ", fruits); //op: before update:  [ 'mango', 'apple', 'litichi' ].
fruits[0] = "banana";
console.log("after update: ", fruits); //op: after update: [ 'banana', 'apple', 'litichi' ].
console.log(fruits.length); //op: 3
fruits[10] = "avacado";
console.log(fruits.length); //op: 11
console.log(fruits); //op: [ 'banana', 'apple', 'litichi', <7 empty items>, 'avacado' ]
console.log(fruits[10]); //op: avacado
