function PersonMaker(name, age) {
  this.name = name;
  this.age = age;
}

let p1 = new PersonMaker("kuldeep", 21);
let p2 = new PersonMaker("Eva", 21);

PersonMaker.prototype.talk = function () {
  console.log(`Hii my name is ${this.name}`);
};

console.log(p1.talk()); //op: Hii my name is kuldeep
console.log(p1.talk() === p2.talk());
