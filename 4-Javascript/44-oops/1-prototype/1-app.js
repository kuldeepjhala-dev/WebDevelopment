let arr = [1, 2, 3, 4, 5];
console.log("hello world");
console.log(arr);

//function is added in array
arr.sayHello = () => {
  console.log("Say hello");
};

//function is called form the array
arr.sayHello();

arr.push(10);

console.log(arr);

//We can access prototype object like this
console.log(arr.__proto__);

//we can define new values in prototype object like this
arr.__proto__.push = (n) => {
  console.log("Pushing number", n);
};

console.log(arr.push(10)); //op: Pushing number 10

console.log(Array.prototype);

console.log(String.prototype);

let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];

arr1.sayHello = () => {
  console.log("Hello");
};

arr2.sayHello = () => {
  console.log("Hello");
};

//both methods will be stored at different location
console.log(arr1.sayHello === arr2.sayHello); //op: false

console.log("ABC".toLocaleLowerCase === "ABC".toLocaleLowerCase); //op: true
