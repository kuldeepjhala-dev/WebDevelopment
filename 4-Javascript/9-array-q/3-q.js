let ticTak = [['x', '_', 'o'], ['_', 'x', '_'], ['o', '_', 'x']];

console.log(ticTak[0]); //op: [ 'x', '_', 'o' ]
console.log(ticTak[1]); //op: [ '_', 'x', '_' ]
console.log(ticTak[2]); //op: [ 'o', '_', 'x' ]

ticTak[0][1] = 'o'; 
console.log(" ");

console.log(ticTak[0]); //op: [ 'x', 'o', 'o' ]
console.log(ticTak[1]); //op: [ '_', 'x', '_' ]
console.log(ticTak[2]); //op: [ 'o', '_', 'x' ]