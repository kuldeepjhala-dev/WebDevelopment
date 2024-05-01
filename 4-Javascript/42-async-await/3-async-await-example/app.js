h1 = document.querySelector("h1");

function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            //This condition is created inorder to understand the rejection in promises. 
            let no = Math.floor(Math.random() * 5);
            if (no > 3) {
                reject("Promise rejected");
            }

            h1.style.color = color;
            console.log("Color changed to", color);
            resolve("color changed!");
            reject("Color not changed")
        }, delay);
    })
}

//reduced code
async function demo() {
    try {
        await changeColor("red", 1000);
        await changeColor("orange", 1000);
        await changeColor("green", 1000);
        await changeColor("purple", 1000);
        await changeColor("pink", 1000);
    } catch (e) {
        console.log(e);
    }

}

demo();

//we are reducing the below code
// let reqPromise = changeColor("red", 500)
//     .then(() => {
//         return changeColor("yellow", 500);
//     })
//     .then(() => {
//         return changeColor("pink", 500);
//     })
//     .then(() => {
//         return changeColor("purple", 500);
//     })
//     .then(() => {
//         return changeColor
//     })
//     .catch((errors) => {
//         console.log(errors);
//     })
// console.log(reqPromise);

