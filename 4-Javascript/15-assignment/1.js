// Create a program that generates a random number representing a dice roll.
// [The number should be between 1 and 6].

// const diceNo = (Math.floor((Math.random() * 6) + 1));
// if (diceNo <= 6) {
//     console.log(diceNo);
// }

console.log(Math.floor((Math.random() * 6) + 1))

// Certainly! When you call Math.random(), it generates a random decimal number between 0(inclusive) and 1(exclusive).This means that the smallest possible value it can produce is 0, and the largest possible value is just below 1.

// Now, when you multiply this random decimal by 6(Math.random() * 6), you're essentially stretching this range from 0 to just below 6. This operation scales up the random decimal, effectively spreading it out over the range from 0 to 6.

// Since the result of Math.random() * 6 can include decimal values, it covers all numbers from 0(inclusive) to 6(exclusive).This is why you can get decimal values in this range when using this expression.

// Here's an example: If Math.random() generates 0.5, then Math.random() * 6 would give you 3. This is because 0.5 * 6 = 3. So, by multiplying Math.random() by 6, you're essentially stretching its output over a larger range, but it still maintains the same randomness distribution.