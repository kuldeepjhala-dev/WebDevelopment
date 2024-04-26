const calculator = {
    add: function (a, b) {
        return a + b;
    },
    sub: function (a, b) {
        return a - b;
    },
    mul: function (a, b) {
        return a * b;
    }
};

console.log(calculator.add(10, 20)); //op: 30

//using shorthand method
const calculator2 = {
    add(a, b) {
        return a + b;
    },
    sub(a, b) {
        return a - b;
    },
    mul(a, b) {
        return a * b;
    }
};

console.log(calculator2.add(10, 50)); //op: 60
