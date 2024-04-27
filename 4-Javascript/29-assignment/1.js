//Square and sum the array elements using the arrow function and then find the average of the array.
let arr = [1, 2, 3, 4, 5];
function q1(arr) {
    let sqrArr = arr.map((el) => (el * el));
    let sum = 0;
    sum = sqrArr.reduce((acc, ele) => {
        return acc + ele
    });
    return (sum / sqrArr.length);
}

console.log(q1(arr)); //op: 11
