const sum = function (a, b) {
    return a + b;
}

console.log(sum(10, 30)); //op: 40

let hello = function (a, b) {
    return "hii";
}

console.log(hello());

hello = function(){
    return "no time for chit chat";
}

console.log(hello());