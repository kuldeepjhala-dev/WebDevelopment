// Write an arrow function named arrayAverage that accepts an array of numbers and returns the average of those numbers.

const arrayAverage = (arr) => {
    let sum = 0;
    arr.forEach(element => {
        sum = sum + element;
    });
    return (sum / (arr.length));
}

let arr = [10, 20, 30, 40, 50];
console.log(arrayAverage(arr));