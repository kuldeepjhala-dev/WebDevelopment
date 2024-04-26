//setInterval(function, timer)
//It has 2 incoming arguments
//1. function(callback function) - It will be called continuously after specified timer.
//2. timer - callback function will be called after the timer continuosly.

// setInterval(() => {
//     console.log("Hello");
// }, 2000);
//op: Hello Hello ................ infinite time

//inorder to stop executing it for infinite time we will use 'id'. Each function has an id.
//use that id to stop the execution, clearInterval(id);

let id = setInterval(() => {
    console.log("Hello");
}, 2000);

let id2 = setInterval(() => {
    console.log("world");
}, 2000);

console.log(id);
console.log(id2);

clearInterval(id); //It will stop the execution of setInterval function who has id = id.
