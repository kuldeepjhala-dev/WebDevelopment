//Create a new array whose elements are in uppercase of words present in the original array.
let str = "abc";
console.log(str.toUpperCase());

let strArr = ["hello", "world", "i", "will", "crack", "good", "job"];
let upperCaseStrArr = strArr.map(el => el.toUpperCase());
console.log(upperCaseStrArr);
//op:
// ['HELLO', 'WORLD', 'I', 'WILL', 'CRACK', 'GOOD', 'JOB']
