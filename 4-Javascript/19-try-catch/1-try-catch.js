//The try statement allows you to define a block of code to be tested for errors while it is being executed.
//The catch statement allows you to define a block of code to be executed, if an error occurs in the try block.
// console.log(a); //op: ERROR
// let a = 5;
try {
    console.log(a);
}
catch(err) {
    console.log("Caught an error.. 'a' is not defined");
    console.log(err); //op: ReferenceError: a is not defined
}
