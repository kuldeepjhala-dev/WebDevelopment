//typeof
a = 25
console.log(typeof a) //op: number

name = "kuldeep"
console.log(typeof name); //op: string

console.log(typeof 59) //op: number
console.log(typeof -59) //op: number
console.log(typeof a) //op: number
console.log(a); //op: 25
console.log(typeof 'a') //op: string

a = "abc"
console.log(typeof a); //op: string

//operations
a = 10
b = 20
e = 4
f = 2
g = 3
console.log(a + b) //op: 30
console.log(a - b) //op: -10
console.log(a * b) //op: 200
console.log(a / b) //op: 0.5
console.log(b / a) //op: 2
console.log(10 * 2) //op: 20

//modular
console.log(b % a) //op: 0 
console.log(a % e) //op: 2
//power
console.log(f ** g) //op: 8
console.log(2 ** 3) //op: 8

c = 0.9999999999999999999999999999999999999999999999999999999
console.log(c) //op: 1

d = 0.99999
console.log(d) //op:0.99999

console.log(12 % 2) //op: 0 
console.log(7 % 2) //op: 1

//NaN (Not-a-Number)
h = 0 / 0
console.log(0 / 0) //op: nan
console.log(h - 1) //op: nan
console.log(h * 1) //op: nan
console.log(h * h) //op: nan
console.log(typeof h) //op: number
console.log(typeof NaN) //op: number

//Precedence
console.log((5 + 2) / 7 + 1 * 2) //op: 3
console.log(3 / 1 + 2 ** 2); //op: 7
console.log(4 + 1 * 6 / 2); //op: 7

//let
let aa;
let bb = 10;
aa = 20;
let cc = aa + bb;
console.log(cc); //op: 30
cc = cc + 1;
console.log(cc); //op: 31

//const
const aaa = 10;
console.log(aaa); //op: 10

//combinaton of let and const
const pie = 3.14;
let rad = 4;
let area = pie * rad ** 2;
console.log(area); //op: 50.24

//unary operators (increment and decrement)\

//pre & post increment 
let agei = 1;
console.log(agei); //op: 1
agei++;
console.log(agei); //op: 2
++agei;
console.log(agei); //op: 3
console.log(agei++); //op: 3
console.log(agei); //op: 4
console.log(++agei); //op: 5
console.log(agei); //op: 5

//pre - increment 
let x = 10;
console.log(x); //op: 10
let newX = ++x;
console.log(x); //op: 11
console.log(newX); //op: 11

//post - increment
let y = 10;
console.log(y); //op: 10
let newY = y++;
console.log(y); //op: 11
console.log(newY); //op: 10

//pre & post decrement
let aged = 5;
console.log(aged); //op: 5
aged--;
console.log(aged); //op: 4
--aged;
console.log(aged); //op: 3
console.log(aged--); //op: 3
console.log(aged); //op: 2
console.log(--aged); //op: 1
console.log(aged); //op: 1

//pre - decrement
let p = 10;
console.log(p); //op: 10
let newP = --p;
console.log(p); //op: 9
console.log(newP); //op: 9

//post - decrement
let q = 10;
console.log(q); //op: 10
let newQ = q--;
console.log(q); //op: 9
console.log(newQ); //op: 10

//boolean
let agee = 13;
let isAdult = false;
console.log(isAdult); //op: false
let isTure = true;
console.log(isTure); //op: true

//type change of variable
let kj = 1;
console.log(typeof kj); //op: number
kj = true;
console.log(typeof kj); //op: boolean

//string
let firstName = "tony";
console.log(firstName); //op: 
console.log(typeof firstName); //op: string

let lastName = 'stark';
console.log(lastName); //op: start
console.log(typeof lastName); //op: string

let char = 'a';
console.log(char); //op: a
console.log(typeof char); //op: string

let num = "123";
console.log(num); //op: 123
console.log(typeof num); //op: string

let emp = " ";
console.log(typeof emp); //op: string
console.log(emp); //op: single_space

let emp2 = "";
console.log(typeof emp2); //op: string
console.log(emp2); //op: empty_space

let st = " sljdn sdknv 343 4 %&^E% 3rkjfnv";
console.log(st); //op: sljdn sdknv 343 4 %&^E% 3rkjfnv

let sentance = 'this is "apple"';
console.log(sentance); //op: this is "apple"

let sentance2 = "this is 'mango'";
console.log(sentance2); //op: this is 'mango'

//string indices
let myName = "kuldeep jhala";
console.log(myName[-1]); //op: undefined
console.log(myName[0]); //op: k
console.log(myName[1]); //op: u
console.log(myName[2]); //op: l
console.log(myName[3]); //op: d
console.log(myName[4]); //op: e
console.log(myName[5]); //op: e
console.log(myName[6]); //op: p
console.log(myName[7]); //op: blank_space
console.log(myName[8]); //op: j
console.log(myName[9]); //op: h
console.log(myName[10]); //op: a
console.log(myName[11]); //op: l
console.log(myName[12]); //op: a
console.log(myName[13]); //op: undefined

console.log(myName.length); //op: 13
console.log(typeof myName.length); //op: number

console.log(myName[myName.length - 1]); //op: a
console.log(myName[myName.length - 2]); //op: l
console.log(myName[myName.length - 3]); //op: a
console.log(myName[myName.length - 4]); //op: h
console.log(myName[myName.length - 5]); //op: j

console.log("hello world".length); //op: 11

console.log("kuldeep".length); //op: 7
console.log("kuldeep".length - 1); //op: 6

console.log("kuldeep"[0]); //op: k
console.log("kuldeep"[1]); //op: u
console.log("kuldeep"[2]); //op: l
console.log("kuldeep"[3]); //op: d
console.log("kuldeep"[4]); //op: e
console.log("kuldeep"[5]); //op: e
console.log("kuldeep"[6]); //op: p

console.log("kuldeep" + " " + "jhala"); //op: kuldeep jhala

let firstName1 = "kuldeep";
let lastName1 = "jhala";
let fullName1 = firstName1 + lastName1;
console.log(fullName1); //op: kuldeepjhala

let fullName2 = firstName1 + " " + lastName1;
console.log(fullName2); //op: kuldeep jhala

let nostr = "kj" + 1;
console.log(typeof nostr); //op: string
console.log(nostr); //op: kj1

//null & undefined
let name2;
console.log(name2); //op: undefined
name2 = null;
console.log(name2); //op: null

let year = null;
console.log(year); //op: null
year = 2024;
console.log(year); //op: 2024

let u = undefined;
console.log(u); //op: undefined

let j = null;
console.log(typeof j); //object

let k;
console.log(typeof k); //undefined

