//Returns true if some elements of array give true for some function. Else returns false.
//It wil only return true or false.
//It will perform operation on the array elements is any one is true then it will return true.
//If all elements are false then only it will return false.

let arr = [2, 1, 3, 5, 7, 9]; //only one element is true.
let ans = arr.some((element) => { return element % 2 == 0 });
console.log(ans); //op: true

let odd = [1, 3, 5, 7, 9]; //all elements are odd, so all are false
let ans2 = odd.some((element) => { return element % 2 == 0 });
console.log(ans2); //op: false