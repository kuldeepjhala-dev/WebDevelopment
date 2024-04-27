const student = {
    name: "kuldeep",
    age: 21,
    clas: 9,
    subjects: ["hindi", "english", "maths", "science"],
    username: "kuldeep@gmail.com",
    password: "abcd",
    car: "BMW"
};

// let username = student.username;
// let password = student.password;

//Note: here the argument which we are giving, has to match the student object's key.
let { username, password, x } = student;

console.log(username, password); //op: kuldeep@gmail.com abcd

console.log(x); //op: undefined
//(as there is no key names 'x').
//so what we can do is we can define key in parameters 'age' : and then our new name of variable.
let { clas, age: theAgeOfUser } = student;

console.log(clas, theAgeOfUser); //op: 9 21

//in the student object if city is not defined then we will assign mumbai
let { city = "mumbai" } = student;

console.log(city); //op: mumbai

let { car = "mercedez" } = student;
console.log(car); //Op: BMW (still the op will be BMW only.)

let { car: myCar = "Mercedez" } = student;
console.log(myCar); //op: BMW (still the op will be BMW, as it is defined but if it is not defined then mercedez will come in output)\

