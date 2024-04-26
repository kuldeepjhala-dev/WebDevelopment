//write a function that prints "Hello World" 5 times at interval of 2s each.
// let count = 0;
// let id = setInterval(() => {
//     if (count >= 4) {
//         clearInterval(id);
//     }
//     console.log("Hello world");
//     count++;
// }, 2000);

// ----------------------------------OR---------------------------------------

let id2 = setInterval(() => {
    console.log("Hello world");
}, 2000);

setTimeout(() => {
    clearInterval(id2);
    console.log("Interval Cleared");
}, 10000);


