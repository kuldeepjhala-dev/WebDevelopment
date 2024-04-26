//returns true if every element of array gives true for some function. Else returns false.
//Every will only return 'true' or 'false'.
//If operation performed on all elements is true then it will return true.
//If operation peroformd on all elements is true and only one is false then it will return false.

const evenArray = [2, 4, 6];
console.log(evenArray.every((element) => {
    return element % 2 == 0;
}));

const notAllEven = [1, 2, 4, 6, 8, 9];
console.log(notAllEven.every(element => element % 2 == 0)); //op: false