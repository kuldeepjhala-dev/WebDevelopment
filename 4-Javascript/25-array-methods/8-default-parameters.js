//given a default value to the arguments.
//Note: default parameter is always defined at the end.
//function func(a = 20, b, c); //This is not allowed.
function func(a, b, c = 10) {
    return (a + b + c);
}

console.log(func(10, 20)); //op: //op: 40