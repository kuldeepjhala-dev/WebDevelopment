//write 'async' keyword before before creating a function.
//Async function returns a promise
//if we dont return anything then it will also return a promise.
//if a function is executed then its state will be fullfilled.
//if a error occuse then promise will be returned but its state will be rejected state.

async function greet() {
    // throw "you can throw explicit error from here";
    return "greetings";
}

greet()
    .then((result) => {
        console.log("result:", result);
    })
    .catch((err) => {
        console.log("result:", err);
    })

let hello = async () => {
    console.log(5);
}

hello()
    .then((result) => {
        console.log("result:", result);
    })
    .catch((err) => {
        console.log("result:", err);
    })

