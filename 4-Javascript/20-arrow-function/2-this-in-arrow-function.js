//this in arrow function
//this keyword behaves different with arrow function and with normal function.
//Normal Fucntion: Normal function ke liye 'this' hota hai jo object usse call laga rahi hai
//Arrow Function: Arrow function ke liye this hota hai hamare parent ko call lagane vali object

const student = {
    name: "kuldeep",
    marks: 95,
    prop: this, //global scope
    getName: function () {
        console.log(this); //object scope
        return this.name; //op: kuldeep
    },
    getMarks: () => {
        console.log(this); //parent's scope which is object's parent which is window
        return this.marks; //op: undefined
    },
    getInfo1: function () {
        setTimeout(() => {
            console.log("Arrow Function");
            console.log(this); //student object scope
        }, 2000);
    },
    getInfo2: function () {
        setTimeout(function () {
            console.log("Normal Function");
            console.log(this); //window object scope
        }, 2000);
    }
}

const a = 5; // 'a' has global scope

// console.log(student);
//op:
// { name: 'kuldeep', marks: 95, prop: {window object }, getName: [Function: getName] }

// console.log(student.getName());
//op:
// { name: 'kuldeep', marks: 95, prop: { }, getName: [Function: getName] }
// kuldeep

// console.log(student.getMarks());
//op:
// {WINDOW Object}
// undefined

console.log(student.getInfo1());
//op:
//Arrow Function
// {
//     name: 'kuldeep',
//     marks: 95,
//     prop: { },
//     getName: [Function: getName],
//     getMarks: [Function: getMarks],
//     getInfo1: [Function: getInfo1],
//     getInfo2: [Function: getInfo2]
// }

console.log(student.getInfo2());
//op:
//Normal Function
//{Window Object}