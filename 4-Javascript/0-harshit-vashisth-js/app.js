// Synchronous vs ASynchronous programming
// Javascript is a Synchronous Programming language and it is single threaded

//-----------------------setTimeout()-1-----------------------
//setTimeout() means hello function will execute after 1000(1-sec) time.
// console.log("Script start");
// function hello() {
//   console.log("Hello world!");
// }
// setTimeout(hello, 1000);
// console.log("Script end");

//-----------------------setTimeout()-2-----------------------
//No matter how much time we define in setTimeout method, it will always execute once the code is executed.
//setTimeout() is a Web-Api which is provided by browser. It will execute after all the scripts below it is executed.
//setTimeout()  will execute after the minimum-time given in its parameter. Even if time is '0' it will execute once scripts below it are executed.
//Once the minimum time is completed and script below the setTimeout() function is executed, it will execute the function/arrow-function inside the setTimeout()'s parameter.
// console.log("Script start");
// setTimeout(() => {
//   console.log("Hello");
// }, 0);
// for (i = 0; i < 100; i++) {
//   console.log("....");
// }
// console.log("Script end");
//op: Script start
//    . . . * 99
//    Script end
//    Hello

//-----------------------setTimeout()-2-----------------------
//setTimeout() returns an object.
//If we pass the object of setTimeout() as a parameter in clearTimeout() funciton then the method defined in setTimeout() will not execute.
// console.log("Script start");
// const id = setTimeout(() => {
//   console.log("Hello");
// }, 1000);
// for (i = 0; i < 10; i++) {
//   console.log("....");
// }
// console.log("settimeout object is ", id);
// console.log("clearing time out");
// clearTimeout(id);
// console.log("Script end");
//op: Script start
//    . . . * 10
//    settimeout id is  Timeout {
//   _idleTimeout: 1000,
//   _idlePrev: [TimersList],
//   _idleNext: [TimersList],
//   _idleStart: 24,
//   _onTimeout: [Function (anonymous)],
//   _timerArgs: undefined,
//   _repeat: null,
//   _destroyed: false,
//   [Symbol(refed)]: true,
//   [Symbol(kHasPrimitive)]: false,
//   [Symbol(asyncId)]: 6,
//   [Symbol(triggerId)]: 1
//   }
//   clearing time out
//   Script end

//-----------------------setInterval()-----------------------
// setInterval() function is used to execute it's parameter function continuously.
//It returns a id-object which if passed as parameter to clearInterval() function then it will stop the setInterval's parameter function.
// console.log("Script start");
// const id = setInterval(() => {
//   console.log(Math.random());
// }, 10);
// console.log("Script end");
// clearInterval(id);

//-----------------------callback()-----------------------
  