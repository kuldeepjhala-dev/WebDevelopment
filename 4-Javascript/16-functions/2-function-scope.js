//variable defined inside a function are not accessible (visible) from outside the function.

let sum = 10; //Global Scope
console.log("outside calcSum(), sum = ", sum); //op: outside calcSum(), sum =  10

function calcSum(a, b) {
    let sum = a + b; //Functional Scope
    console.log("inside calcSum(), sum = ", sum); //op: inside calcSum(), sum =  30
    return sum;
}

console.log(calcSum(10, 20)); //op: 30

function calcSum2() {
    console.log(sum); //op: 10 => here the global scope value is used because inside function that value is not given
}

calcSum2();