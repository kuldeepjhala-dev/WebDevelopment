const sum = (a, b) => a + b;
const mul = (a, b) => a * b;
const sub = (a, b) => a - b;

const PI = 3.14;
const g = 9.8;

//--------------------------------------------

// let exportObj = {
//     sum: sum,
//     mul: mul,
//     sub: sub,
//     PI: PI,
//     g: g
// };
// module.exports = exportObj;

//--------------------------------------------

//we can also directly export like this
// module.exports = {
//     sum: sum,
//     mul: mul,
//     sub: sub,
//     PI: PI,
//     g: g
// };

//------------------------------------------

//we can  also export individual function and value
// module.exports.sum = (a, b) => a + b;
// module.exports.mul = (a, b) => a * b;
// module.exports.sub = (a, b) => a - b;

// module.exports.PI = 3.14;
// module.exports.g = 9.8;

//------------------------------------------

//Short form of above
exports.sum = (a, b) => a + b;
exports.mul = (a, b) => a * b;
exports.sub = (a, b) => a - b;

exports.PI = 3.14;
exports.g = 9.8;

// export = 5; //ERROR will be generated