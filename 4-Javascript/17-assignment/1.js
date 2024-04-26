//Write a JavaScript function that returns array elements larger than a number
const arr = [22, 43, 1, 5, 39, 40, 4046, 75, 23, 454, 5, 75, 3, 57, 87, 23, 65, 87, 342, 12];
const no = 39;

function largerElements(n, arr) {
    let demo = [];
    arr.forEach(element => {
        if (element >= n) demo.push(element);
    });
    return demo;
}

const ans = largerElements(no, arr);
console.log(ans); //op: [ 43, 39, 40, 4046, 75, 454, 75, 57, 87, 65, 87, 342 ]
