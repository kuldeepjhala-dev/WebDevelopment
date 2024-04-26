//const func = (arg1, arg2...) => {funciton definition}

const sum = (a, b) => {
    console.log(a + b);
}

sum(10, 30); //op: 40

const cube = (a) => {
    return a * a * a;
}
//if single argument then you can remove ().
const cube1 = a => {
    return a * a * a;
}

console.log(cube(3)); //op: 27

const pow = (a, b) => {
    return a ** b;
}
//if you are returning a single value in single sentence then you can use implicit return of arrow function.
const pow2 = (a, b) => (a ** b);
//if you want to make it even smaller then you can do this.
const pow3 = (a, b) => a ** b;

console.log(pow(3, 2)); //op: 9
console.log(pow2(3, 2)); //op: 9
console.log(pow3(3, 2)); //op: 9

const hello = () => {
    console.log("Hello world")
}

hello(); //op: hello world
