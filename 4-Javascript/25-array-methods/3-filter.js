//Filter is used to filter data in array based on some contition.
//The callback function in the filter will perform some opertaion on each element.
//If the operation returns true then that element will be added in the newArray.
//If the operation returns false then that element will be discarded and it will not be returned.

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let evenNo = nums.filter(el => el % 2 == 0);

let evenNo = nums.filter((element) => {
    return element % 2 == 0; //even -> true(this element will be returned) , odd -> false(this element will not be returned)
});

let oddNo = nums.filter(el => !(el % 2 == 0));

console.log(evenNo); //op: [ 2, 4, 6, 8, 10 ]
console.log(oddNo); //op: [ 1, 3, 5, 7, 9 ]