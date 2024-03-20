//array methods

//push() - add to end 
let cars = ["audi", "bmw", "xuv", "maruti"];
console.log(cars.length); //op: 4
cars.push("toyata");
console.log(cars.length); //op: 5
cars.push("ferrari");
console.log(cars.length); //op: 6
console.log(cars); //op: [ 'audi', 'bmw', 'xuv', 'maruti', 'toyata', 'ferrari' ]

//pop() - delete from end & returns it

console.log(cars); //op: [ 'audi', 'bmw', 'xuv', 'maruti', 'toyata', 'ferrari' ]
console.log(cars.pop()); //op: ferrari
console.log(cars); //op: [ 'audi', 'bmw', 'xuv', 'maruti', 'toyata']
console.log(cars.pop()); //op: toyata
console.log(cars); //op: [ 'audi', 'bmw', 'xuv', 'maruti' ]

//unshift() - add to start

console.log(cars); //op: [ 'audi', 'bmw', 'xuv', 'maruti' ]
cars.unshift("mercedez");
console.log(cars); //op: [ 'mercedez', 'audi', 'bmw', 'xuv', 'maruti' ]
cars.unshift("jeep");
console.log(cars); //op: [ 'jeep', 'mercedez', 'audi', 'bmw', 'xuv', 'maruti' ]

//shift() - delete from front end & returns it

console.log(cars); //op: [ 'jeep', 'mercedez', 'audi', 'bmw', 'xuv', 'maruti' ]
console.log(cars.shift()); //op: jeep
console.log(cars); //op: [ 'mercedez', 'audi', 'bmw', 'xuv', 'maruti' ]
console.log(cars.shift()); //op: mercedez
console.log(cars); //op: [ 'audi', 'bmw', 'xuv', 'maruti' ]

//indexOf() - returns index of something
let colors = ["red", "yellow", "blue"];
console.log(colors.indexOf("red")); //op: 0
console.log(colors.indexOf("yellow")); //op: 1
console.log(colors.indexOf("blue")); //op: 2
console.log(colors.indexOf("Blue")); //op: -1
console.log(colors.indexOf("kuldeep")); //op: -1

//includes() - search for a value (returns boolean)
let bottle = ["milton", "cellon", "taperware"];
console.log(bottle.includes("milton")); //op: true
console.log(bottle.includes("kuldeep")); //op: false

//concat() - merge 2 arrays
let a = [1, 2, 3];
let b = ["four", "five", "six"];
console.log(a.concat(b)); //op: [ 1, 2, 3, 'four', 'five', 'six' ]
console.log(a); //op: [ 1, 2, 3 ]
console.log(b); //op: [ 'four', 'five', 'six' ]
let c = b.concat(a);
console.log(c); //op: [ 'four', 'five', 'six', 1, 2, 3 ]

//revers() - reverse the array
let d = [1, 2, 3, "four", 5, 6, "seven"];
console.log(d.reverse()); //op: [ 'seven', 6, 5, 'four', 3, 2, 1 ]
console.log(d); //op: [ 'seven', 6, 5, 'four', 3, 2, 1 ]

//slice() - copies a portion of an array
let e = ["hello", "world", "I", "AM", "A", "Web", "Developer"];
console.log(e.slice()); //op: [ 'hello', 'world', 'I', 'AM', 'A', 'Web', 'Developer' ]
console.log(e.slice(2)); //op: [ 'I', 'AM', 'A', 'Web', 'Developer' ]
console.log(e.slice(1, 2)); //op: [ 'world' ]
console.log(e.slice(1, 4)); //op: [ 'world', 'I', 'AM' ]
console.log(e.slice(-1)); //op: [ 'Developer' ]
console.log(e.slice(-3)); //op: [ 'A', 'Web', 'Developer' ]
console.log(e.slice(-7)); //op: [ 'hello', 'world', 'I', 'AM', 'A', 'Web', 'Developer' ]
console.log(e.slice(-20)); //op: [ 'hello', 'world', 'I', 'AM', 'A', 'Web', 'Developer' ]
console.log(e.length); //op: 7
console.log(e.slice(e.length)); //op: []
console.log(e.slice(e.length - 1)); //op: ['Developer']

//splice() - removes/replace/add element in place - splice(startIndex, deleteCountIndex, itemToAdd0.....itemToAddN)
console.log("Splice() method")
let aColors = ["red", "yellow", "blue", "orange", "pink", "white"];
console.log(aColors.splice(4)); //op: [ 'pink', 'white' ]
console.log(aColors); //op: [ 'red', 'yellow', 'blue', 'orange' ]
console.log(aColors.splice(0, 1)); //op: [ 'red' ]
console.log(aColors); //op: [ 'yellow', 'blue', 'orange' ]
console.log(aColors.splice(0, 1, "black", "white")); //op: [ 'yellow' ]
console.log(aColors); //op: [ 'black', 'white', 'blue', 'orange' ]
aColors.splice(0, 0, "violet");
console.log(aColors); //op: [ 'violet', 'black', 'white', 'blue', 'orange' ]
aColors.splice(1, 0, "cyan");
console.log(aColors); //op: [ 'violet', 'cyan', 'black', 'white', 'blue', 'orange' ]
console.log(aColors.splice(1, 1, "red")); //op: [ 'cyan' ]
console.log(aColors);

//sort() - sorts an array
let nos = [1, 4, 5, 2, 3, 1, 2, 9, 3, 4, 7, 9, 2.0];
console.log(nos.sort()); //op: [1, 1, 2, 2, 2, 3, 3, 4, 4, 5, 7, 9, 9]
console.log(nos); //op: [1, 1, 2, 2, 2, 3, 3, 4, 4, 5, 7, 9, 9]

let chars = ['a', 'r', 'z', 'e', 'q', 'w', 'y', 's', 'd', 'g', 'c'];
console.log(chars);  //op: ['a', 'r', 'z', 'e', 'q', 'w', 'y', 's', 'd', 'g', 'c']
console.log(chars.sort()); //op: ['a', 'c', 'd', 'e', 'g', 'q', 'r', 's', 'w', 'y', 'z']
