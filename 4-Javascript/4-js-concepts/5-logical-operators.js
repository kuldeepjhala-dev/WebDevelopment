//logical operators

//logical-and-&&
console.log(true && true); //op: true
console.log(true && false); //op: false
console.log(false && true); //op: false
console.log(false && false); //op: false

//logical-or-||
console.log(true || true); //op: true
console.log(true || false); //op: false
console.log(false || true); //op: false
console.log(false || false); //op: flase

console.log((3 > 2) && (5 < 10)); //op: true

let marks = 92;
if (marks >= 33 && marks >= 90) {
    console.log("PASS");
    console.log("GRADE:A++");
}

//logical-not-!
console.log(!true); //op: false
console.log(!false); //op: true

marks = 40;
if (!(marks < 33)) {
    console.log("PASS");
}

//combination of multiple logical operators
//because of multiple logical conditions the execution happens from left to right
marks = 75;
if ((marks > 33 && marks <= 80) || !false) {
    console.log("pass");
}