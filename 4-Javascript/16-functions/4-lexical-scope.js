//A variable defined putside a funciton can be accessible inside another function defined after the variable declaration.
//opposite is not true.

function outerFun() {
    let x = 5;
    let y = 10;
    function innerFun() {
        let a = 3;
        console.log(x); //op: 5
        console.log(y); //op: 10
        console.log(a); //op: 3
    }
    console.log(x); //op: 5
    console.log(y); //op: 10
    // console.log(a);//op: Error
    innerFun();
}
outerFun(); //op: 5 10 5 10 3
// innerFun();//op: Error

//What will be output of the following code ?

let greet = "Hello"; //Global Scope

function changeGreet() {
    let greet = "namaste"; //Functional Scope
    console.log(greet);
    function innerGreet() {
        console.log(greet); //op: lexical Scope
    }
    innerGreet();
}
console.log(greet);
changeGreet(); //op: Hello Namaste