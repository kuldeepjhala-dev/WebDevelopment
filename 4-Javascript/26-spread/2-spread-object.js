let data = {
    email: "ironman@gmail.com",
    password: "abcd"
};

let dataCopy = { ...data, id: 29404 };
console.log(dataCopy); //op: { email: 'ironman@gmail.com', password: 'abcd', id: 29404 }

//spreading array in object, here index will be keys and data will be value. (index:value) pair
let arr = [1, 2, 3, 4, 5, 6];
let obj1 = { ...arr };
console.log(obj1); //op: { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5, '5': 6 }