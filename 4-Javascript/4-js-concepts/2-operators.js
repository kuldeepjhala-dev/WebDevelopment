let a = 10;
let b = 5;

//Arithmetic operator
console.log(a + b); //op: 15
console.log(a * b); //op: 50
console.log(a / b); //op: 2
console.log(a % b); //op: 0
console.log(a ** b); //op: 100000

// unary operators
console.log(a); //op: 10
console.log(a++); //op: 10
console.log(a); //op: 11
console.log(++a); //op: 12
console.log(a); //op: 12
console.log(b); //op: 5
console.log(b--); //op: 5
console.log(b); //op: 4
console.log(--b); //op: 3
console.log(b); //op: 3

// comparision operators
let age = 18;
console.log(age > 18); //op: false
console.log(age >= 18); //op: true
console.log(age < 18); //op: false
console.log(age <= 18); //op: true
age = 20;
console.log(age > 18); //op: true
age = 12;
console.log(age < 18); //op: true
console.log(0 > -99); //op: true
console.log(3 == 3); //op: true
console.log(3 == 9); //op: false
console.log(3 != 3); //op: false
console.log(3 != 9); //op: true
console.log(5 == '5'); //op: true
console.log(5 === '5'); //op: false
console.log(5 === 5); //op: true

console.log('5' == '5'); //op: true
console.log("123" == 123); //op: true
console.log(1 == '1'); //op: true
console.log(0 == ' '); //op: true
console.log(0 == false); //op: true
console.log(null == undefined); //op: true

console.log('5' === '5'); //op: true
console.log("123" === 123); //op: false
console.log(1 === '1'); //op: false
console.log(0 === ' '); //op: false
console.log(0 === false); //op: false
console.log(null === undefined); //op: false

//comparisions for non-numbers(comparision is based on unicodes value)
console.log('a' < 'A'); //op: false
console.log('a' > 'b'); //op; false
console.log('b' < 'c'); //op: true
console.log('B' < 'C'); //op: true
console.log('*' < '&'); //op: false


