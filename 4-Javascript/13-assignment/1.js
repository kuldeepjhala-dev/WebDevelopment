//Write a JS program to delete all occurrences of element ‘num’ in a given array.
// Example: if arr = [1, 2, 3, 4, 5, 6, 2, 3] & num = 2
// Result should be arr = [1, 3, 4, 5, 6, 3]

let arr = [1, 2, 3, 4, 5, 6, 2, 3];
let num = 2;

console.log(arr);

while (true) {
    let index = arr.indexOf(num);
    if (index != -1) {
        arr.splice(index, 1);
    }
    else {
        break;
    }
}

console.log(arr);