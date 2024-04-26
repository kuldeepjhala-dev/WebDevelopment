function multipleGreet(func, count) {
    for (let i = 0; i < count; i++) {
        func();
    }
}

let greet = function () {
    console.log("hello");
}


multipleGreet(greet, 5); //op: hello hello hello hello hello

multipleGreet(function () {
    console.log("kuldeep");
}, 6); 


