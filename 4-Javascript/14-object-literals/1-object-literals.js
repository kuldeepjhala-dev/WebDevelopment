//twitter/thread post object literals
const post = {
    username: "@kuldeepsinhJhala",
    content: "I am learning javascript to become good engineer",
    likes: 150,
    reposts: 5,
    tags: ["@workHard", "@youWillCompleteJs"]
}

console.log(post["username"]); //op: @kuldeepsinhJhala
console.log(post.content); //op: I am learning javascript to become good engineer

let query = "username";
console.log(post[query]); //op: @kuldeepsinhJhala

//js converts object-keys to string
const demo = {
    1: "hey",
    2: "b",
    true: "c",
    null: "d",
    undefined: "e"
};

//js is taking number type value from user 'demo[1]' -> converting number type -> string type -> then accessing the value of object literal.
console.log(demo[1]); //op: hey 
console.log(demo[2]); //op: b 
// console.log(demo.1); //op: error
console.log(demo.true); //op: c 
console.log(demo[true]); //op: c
console.log(demo.null); //op: d 
console.log(demo.undefined); //op: e

//updating value of property
const student = {
    name: "kuldeep",
    age: 23
};
console.log(student.age); //op: 23
student.age = 21;
console.log(student.age); //op: 21
console.log(student["name"]); //op: kuldeep 
student["name"] = "kj";
console.log(student["name"]); //op: kj

//adding property to object literal
console.log(student); //op: { name: 'kj', age: 21 }
student.marks = "A++";
console.log(student); //op: { name: 'kj', age: 21, marks: 'A++' }
student.marks = [100, 100, 100, 100, 100]; //datatype changed from string to array.
console.log(student); //op: { name: 'kj', age: 21, marks: [ 100, 100, 100, 100, 100 ] }
console.log(delete student.age); //op: true  
console.log(student); //op: { name: 'kj', marks: [ 100, 100, 100, 100, 100 ] }