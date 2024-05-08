class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  talk() {
    console.log(`Hii ${this.name}`);
  }
}

class Student extends Person {
  constructor(name, age, marks) {
    super(name, age);
    this.marks = marks;
  }
}

class Teacher extends Person {
  constructor(name, age, subjects) {
    super(name, age);
    this.subjects = subjects;
  }
}

let stud1 = new Student("kuldeep", 21, 99);
let stud2 = new Student("Kartik", 21, 69);

stud1.talk();
stud2.talk();

let teach1 = new Teacher("Teacherni", 90);
let teach2 = new Teacher("Shraddha", 23);

teach1.talk();
teach2.talk();

console.log(stud1.marks);
console.log(stud2.marks);
console.log(stud1.name);
console.log(stud2.name);

console.log(stud1);

//Parent Class
class Mammal {
  constructor(name) {
    this.name = name;
    this.type = "Warm-blodded"; //default value
  }
  eat() {
    console.log("I am eating");
  }
}

//child class
class Dog extends Mammal {
  constructor(name) {
    super(name);
  }
  bark() {
    console.log("Bhaw bhaw");
  }
  //Overrides the eat method
  eat() {
    console.log("Dog am eating");
  }
}

//child class
class Cats extends Mammal {
  constructor(name) {
    super(name);
  }
  meoW() {
    console.log("Meow meow");
  }
}

const ceaser = new Dog("ceaser");
ceaser.bark(); //op: bhaw bhaw
ceaser.eat();; //op: Dog is eating