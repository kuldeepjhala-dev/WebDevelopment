//factory function

//this function returns an object
function personMaker(name, age) {
  const person = {
    name: name,
    age: age,
    talk() {
      console.log(`Hii, my name is ${this.name}`);
    },
  };
  return person;
}

let p1 = personMaker("kuldeep", "21");
console.log(p1); //op: { name: 'kuldeep', age: '21', talk: [Function: talk] }
p1.talk(); //op: Hii, my name is kuldeep

let p2 = personMaker("Eva", 21);
console.log(p2); //op: { name: 'Eva', age: 21, talk: [Function: talk] }
p2.talk(); //op: Hii, my name is Eva

//disadvantage
//Each object p1, p2 will have individual copy of data and methods. So ar we are using talk fuction constantly then also it's
//individual copy will be stored on each machine.

console.log(p1.talk === p2.talk); //op: false
