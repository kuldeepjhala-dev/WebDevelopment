for (let i = 1; i <= 5; i++) {
    console.log(i);
}
//op: 1 2 3 4 5
console.log();

for (let i = 5; i >= 0; i--) {
    console.log(i);
}
//op: 5 4 3 2 1
console.log();

// console.log(i); //op: ERROR because it's reference is only in for loop

//print all odd numbers from 1 to 15
for (let i = 1; i <= 15; i = i + 2) {
    console.log(i);
}
//op: 1 3 5 7 9 11 13 15
console.log();

//print all even numbers (2 to 10)
for (let i = 2; i <= 10; i = i + 2) {
    console.log(i);
}
//op: 2 4 6 8 10

//print multiplication table of 5
for (let i = 1; i <= 10; i++){
    console.log(`5 * ${i} = ${i * 5}`);
}
//op:
// 5 * 1 = 5
// 5 * 2 = 10
// 5 * 3 = 15
// 5 * 4 = 20
// 5 * 5 = 25
// 5 * 6 = 30
// 5 * 7 = 35
// 5 * 8 = 40
// 5 * 9 = 45
// 5 * 10 = 50