//variable declared inside a {} block cannot be accessed from outside the block.
//it is only applicable for let and const. Not applicable on var.

a = 100000; //Global Scope
console.log(a); //op: 100000

{
    var a = 69; //Block Scope(var)
    console.log(a); //op: 69
}
console.log(a); //op: 69

{
    let a = 20; //Block Scope(let)
    console.log(a); //op: 20
}
console.log(a); //op: 69

{
    const a = 30; //Block Scope(const)
    console.log(a); //op: 30
}
console.log(a); //op: 69

