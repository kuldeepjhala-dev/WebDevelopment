//Nested Array or Multidimensional array
let nums = [[2, 4], [3, 6], [4, 8]];

console.log(nums); //op: [ [ 2, 4 ], [ 3, 6 ], [ 4, 8 ] ]

let child1 = [1, 2, 3];
let child2 = [4, 5, 6];
let child3 = [7, 8, 9];

let parent = [child1, child2, child3];
console.log(parent); //op: [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]

console.log(parent[0][2]); //op: 3

