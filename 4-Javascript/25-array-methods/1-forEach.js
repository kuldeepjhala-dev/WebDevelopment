let arr = [10, 30, 40, 103, 292, 329, 32, 42, 6, 2];

let print = function (element) {
    console.log(element);
}

//we can traverse on each element using forEach method of Arrry.
arr.forEach(print); //op: 10 30 40 103 292 329 32 42 6 2

arr.forEach((element) => {
    console.log(element); //op: 10 30 40 103 292 329 32 42 6 2
})

let obj = [
    {
        name: "kuldeep",
        age: 20
    },
    {
        name: "Jay",
        age: 22
    },
    {
        name: "Ketul",
        age: 26
    },
    {
        name: "Bhaumik",
        age: 26
    }
];

obj.forEach((student) => {
    console.log(student);
});
//op:
// { name: 'kuldeep', age: 20 }
// { name: 'Jay', age: 22 }
// { name: 'Ketul', age: 26 }
// { name: 'Bhaumik', age: 26 }

obj.forEach(function (studentName) {
    console.log(studentName.name);
});
//op:
// kuldeep
// Jay
// Ketul
// Bhaumik


