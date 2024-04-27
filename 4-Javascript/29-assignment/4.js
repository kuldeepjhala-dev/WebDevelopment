// Write a function called doubleAndReturnArgs which accepts an array and a
// variable number of arguments.The function should return a new array with the original
// array values and all of the additional arguments doubled.

let arr = [1, 2, 3, 4, 5];

function doubleAndReturnArgs(arr, ...arguments) {
    let args = [...arguments];
    args = args.map(el => el + el);
    let newArray = [...arr, ...args];
    return newArray;
}

const doubleAndReturnArg = (arr, ...arguments) => [...arr, ...arguments.map(el => el * 2)];
console.log(doubleAndReturnArgs(arr, 10, 20, 30, 40, 50));//op: [ 1, 2, 3, 4, 5, 20, 40, 60, 80, 100 ]

let ans = doubleAndReturnArgs(arr, 10, 20, 30, 40, 50);
console.log(ans); //op: [ 1, 2, 3, 4, 5, 20, 40, 60, 80, 100 ]