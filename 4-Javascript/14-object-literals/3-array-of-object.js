const classInfo = [
    {
        name: "aman",
        age: 26
    },
    {
        name: "shradha",
        age: 21
    }
];

console.log(classInfo); //op:[ { name: 'aman', age: 26 }, { name: 'shradha', age: 21 } ]

console.log(classInfo[0]); //op: { name: 'aman', age: 26 }

console.log(classInfo[0].name); //op: aman

classInfo[0].city = "vadodara";

console.log(classInfo[0]); //op: { name: 'aman', age: 26, city: 'vadodara' }

