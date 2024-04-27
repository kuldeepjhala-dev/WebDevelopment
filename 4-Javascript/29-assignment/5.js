//Write a function called mergeObjects that accepts two objects and returns a new
//object which contains all the keys and values of the first object and second object.

let obj1 = {
    name: "kuldeep",
    age: "21"
};

let obj2 = {
    city: "vadodara",
    state: "gujarat"
};

function mergeObjects(obj1, obj2) {
    let obj3 = { ...obj1, ...obj2 };
    return obj3;
}

console.log(mergeObjects(obj1, obj2)); //op: { name: 'kuldeep', age: '21', city: 'vadodara', state: 'gujarat' }