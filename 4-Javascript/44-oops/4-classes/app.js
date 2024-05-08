class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  talk() {
    console.log(`Hii ${this.name}`);
  }
}

let p1 = new Person("kuldeep", 21);
let p2 = new Person("Eva", 21);

console.log(p1);
p1.talk(); //op: Hii kuldeep

//it is true because the 
console.log(p1.talk() === p2.talk()); //op: true