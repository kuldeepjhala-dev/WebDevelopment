h1 = document.querySelector("h1");

//Below code is tedious and it is not appreciated in programming when you are doing asynchronous programming.
// setTimeout(() => {
//     h1.style.color = "red";
// }, 1000)

// setTimeout(() => {
//     h1.style.color = "yello";
// }, 2000)

// setTimeout(() => {
//     h1.style.color = "green";
// }, 3000)

// ------------------------------------------------------------------------------------

//Now to reduce code we approached this method. But here the code is independent.
//If we want to create a dependency then it is hard in this type of code.
//Dependency means first this code will execute then next code will execute.
function changeColor(color, delay) {
    setTimeout(() => {
        h1.style.color = color;
    }, delay);
}
changeColor("red", 1000);
changeColor("orange", 2000);
changeColor("green", 3000);

//--------------------------------------------------------------------------------------

//Inorder to create dependent code we add nextColorChange() function.
//Dependency is created that first 'red' color change will be applied then 'yellow' and so on.... till 'green'.
//Which will be the last as in parameter we have not passed function we have passed 'false' value.
//This is called callback nesting. But it is hard to understand.This is called callback-hell.
//So we use async-awake and promises.
function changeColor(color, delay, nextColorChange) {
    setTimeout(() => {
        h1.style.color = color;
        if (nextColorChange) {
            nextColorChange();
        }
    }, delay)
}
changeColor("red", 1000, () => {
    changeColor("yellow", 1000, () => {
        changeColor("pink", 1000, () => {
            changeColor("yellow", 1000, () => {
                changeColor("green", 1000, false);
            });
        });
    });
});

//-------------------------------------------------------------------------------------

//Example of callback-hell

function saveToDb(data, success, failure) {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
        success();
    }
    else {
        failure();
    }
}

saveToDb("This is data", () => {
    console.log("Success: Your data was saved");

    saveToDb("This is data2", () => {
        console.log("Success2: Your data was saved");

        saveToDb("This is data3", () => {
            console.log("Success3: Your data was saved");
        }, () => {
            console.log("Failure3: Week connection. Data not saved");
        })

    }, () => {
        console.log("Failure2: Your data is not saved");
    })
    
}, () => {
    console.log("Failure: Week connection. Data not saved");
});