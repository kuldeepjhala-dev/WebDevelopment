//map will use a callback function and it will traverse on each element of the array and it can modify it by applying some operations on it.
//It  will not change the original array but it will return element which is stored in new element.
//The size of the new array will be the same.

const num = [1, 2, 3, 4];

const newNum = num.map(function (element) {
    return element * 2;
});

console.log(num); //op: [ 1, 2, 3, 4 ]
console.log(newNum); //op: [ 2, 4, 6, 8 ]

let obj = [
    {
        name: "kuldeep",
        age: 20,
        marks: 90
    },
    {
        name: "Jay",
        age: 22,
        marks: 99
    },
    {
        name: "Ketul",
        age: 26,
        marks: 49
    },
    {
        name: "Bhaumik",
        age: 26,
        marks: 99
    }
];

let gpa = obj.map((element) => {
    return ((element.marks) / 10);
});

console.log(gpa); //op: [ 9, 9.9, 4.9, 9.9 ]