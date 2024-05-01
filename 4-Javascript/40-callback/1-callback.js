// let a = 25;
// let b = 40;
// console.log(a)
// console.log(b)
// console.log(a+b)

// It will execute one by one.  As JAVASCRIPT IS SINGLE-THREADED. It is called Synchronous nature of programming execution.

setTimeout(() => {
    console.log("apna college");
}, 2000);

setTimeout(() => {
    console.log("hello world");
}, 3000);

console.log("Hello world");
//op:
// Hello world
// apna college
// hello world

//As  js is single threaded then how can it perform operations using setTimeout.
//It is done by browser. Browser stores the function in it call-stack.
//Once the time end's of setTimeout function. The function in call stack will be executed by js.
//This nature is called Asynchronous nature of Programming execution.