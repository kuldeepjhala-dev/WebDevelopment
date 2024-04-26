//Write a JavaScript function to count the number of vowels in a String argument.
var vowels = ['a', 'e', 'i', 'o', 'u'];
const stringArg = "helloWorld";

function countVowels(str) {
    let ans = 0;
    for (const element of str) {
        if (vowels.includes(element)) {
            ans++;
        }
    }
    return ans;
}

console.log(countVowels(stringArg));