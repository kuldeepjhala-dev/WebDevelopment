h1 = document.querySelector("h1");

//Below is example of callback-hell.
// function changeColor(color, delay, nextColorChange) {
//     setTimeout(() => {
//         h1.style.color = color;
//         if (nextColorChange) {
//             nextColorChange();
//         }
//     }, delay)
// }
// changeColor("red", 1000, () => {
//     changeColor("yellow", 1000, () => {
//         changeColor("pink", 1000, () => {
//             changeColor("yellow", 1000, () => {
//                 changeColor("green", 1000, false);
//             });
//         });
//     });
// });

function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            resolve("color changed!");
            reject("Color not changed")
        }, delay);
    })
}

let reqPromise = changeColor("red", 500)
    .then(() => {
        return changeColor("yellow", 500);
    })
    .then(() => {
        return changeColor("pink", 500);
    })
    .then(() => {
        return changeColor("purple", 500);
    })
    .then(() => {
        return changeColor
    })
    .catch((errors) => {
        console.log(errors);
    })

console.log(reqPromise);