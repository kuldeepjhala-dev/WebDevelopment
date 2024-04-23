const classInfo = {
    aman: {
        grade: "A+",
        city: "delhi"
    },
    shradha: {
        grade: "A",
        city: "pune"
    },
    karan: {
        grade: "O",
        city: "Mumbai"
    }
}

console.log(classInfo); //op: {
// aman: { grade: 'A+', city: 'delhi' },
// shradha: { grade: 'A', city: 'pune' },
// karan: { grade: 'O', city: 'Mumbai' }
// }

console.log(classInfo.aman); //op: { grade: 'A+', city: 'delhi' }

console.log(classInfo.aman.city); //op: delhi

console.log(classInfo.shradha.city); //op: pune
classInfo.shradha.city = "Vadodara";
console.log(classInfo.shradha.city); //op: Vadodara