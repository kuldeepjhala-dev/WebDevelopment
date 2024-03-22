let fruits = ["mango", "apple", "banana", "litichi", "orange"];
for (let i = 0; i <= fruits.length - 1; i++) {
    console.log(i, fruits[i]);
}
// op:
// 0 mango
// 1 apple
// 2 banana
// 3 litichi
// 4 orange

for (let i = fruits.length - 1; i >= 0; i--) {
    console.log(i, fruits[i]);
}
// op:
// 4 orange
// 3 litichi
// 2 banana
// 1 apple
// 0 mango