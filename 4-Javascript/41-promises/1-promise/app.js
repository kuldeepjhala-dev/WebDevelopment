//The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
//Promise is a object.

//There are many states in promises:-
//pending - we dont know that promise is completed or not.
//rejected - promise is rejected
//fulfilled(resolved) - promise is completed

//As promise is an object so it can have many methods.
//If promise is fullfilled or rejected.
//After any of two state what to do is decided by resolve =>.then() and failure=>.catch() method.

//.then(), if the promise is fullfilled, it is used to indicate what next work to do after that promise.
//.catch(), if the promise is failed or any failure occurs then .catch() method is used to handel that failure of that promise. 

//To overcome problem of callback hell we use promises.

//Example of callback-hell
// function saveToDb(data, success, failure) {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 4) {
//         success();
//     }
//     else {
//         failure();
//     }
// }

// saveToDb("This is data", () => {
//     console.log("Success: Your data was saved");

//     saveToDb("This is data2", () => {
//         console.log("Success2: Your data was saved");

//         saveToDb("This is data3", () => {
//             console.log("Success3: Your data was saved");
//         }, () => {
//             console.log("Failure3: Week connection. Data not saved");
//         })

//     }, () => {
//         console.log("Failure2: Your data is not saved");
//     })

// }, () => {
//     console.log("Failure: Week connection. Data not saved");
// });

//Promise solution of above saveToDb().
//Below success = resolve, failure = reject.

function saveToDb(data) {
    return new Promise((success, failure) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if (internetSpeed > 4) {
            success("data was saved.");
        }
        else {
            failure("Week connection, Data not saved.");
        }
    })
}

// let request = saveToDb("kuldeep"); //req = promise object
// request.then(() => {
//     console.log("promise was resolved");
//     console.log(request);
// })
// request.catch(() => {
//     console.log("Promise was rejected");
//     console.log(request)
// });

//Short form for  writing above syntax
// saveToDb("Kuldeep").then(() => {
//     console.log("promise was resolved");
// }).catch(() => {
//     console.log("Promise was rejected");
// })

//Promise-chaining - but wrong implementation. Avoid this type of implementation
// saveToDb("Data1").then(() => {
//     console.log("Success: promise was resolved");
//     saveToDb("Data2").then(() => {
//         console.log("Success2: promise was resolved");
//         saveToDb("data3").then(() => {
//             console.log("Success3: promise was resolved");
//         })
//     })
// })
//     .catch(() => {
//         console.log("Failure: Promise was rejected");
//     })

//Better way to write promise chaning
// saveToDb("Data1")
//     .then(() => {
//         console.log("data1 saved");
//         return saveToDb("Data2")
//     })
//     .then(() => {
//         console.log("data2 saved");
//         return saveToDb("Data3")
//     })
//     .then(() => {
//         console.log("data3 saved");
//     })
//     .catch(() => {
//         console.log("promise was rejected");
//     })


//promises are rejected and revolve with some data(valid results or errors)
//result : defines result from the promise.
//error : defined errow from the promise.

saveToDb("Data1")
    .then((result) => {
        console.log("result of promise: ", result);
        return saveToDb("Data2")
    })
    .then((result) => {
        console.log("result of promise: ", result);
        return saveToDb("Data3")
    })
    .then((result) => {
        console.log("result of promise: ", result);
    })
    .catch((error) => {
        console.log("error of promise: ", error);
    })