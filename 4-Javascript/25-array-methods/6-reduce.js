//Reduce the array to single value
//function inside reduce is known as reducer function. It has two arguments reducer and accumulator.
//array will iterate on each element and it will return something which is stored in accumulator.
//Now that accumulator will be carry forwarded again to the function when it will iterate through next element and this cycle will go on until the no of elements are present.

const arr = [1, 22, 3, 4, 5];
console.log(arr.reduce((accumulator, element) => {
    return element + accumulator;
}));
//op: 15

let max = -1;
// max = arr.reduce((max, element) => {
//     if (max < element) {
//         max = element;
//     }
//     return max;
// })
// --------------------------OR---------------------------
max = arr.reduce((max, element) => {
    if (max < element) {
        return element;
    }
    else {
        return max;
    }

})
console.log(max); //op: 5