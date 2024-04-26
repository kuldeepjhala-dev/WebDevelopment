//Write a JavaScript function to extract unique characters from a string.
//Example: str = “abcdabcdefgggh”
//ans = “abcdefgh”

const str = "abcdabcdefgggh";

function uniqueElement(str) {
    let ans = "";
    for (let i = 0; i < str.length; i++) {
        if (!ans.includes(str[i])) {
            ans = ans + str[i];
        }
    }
    console.log("fun", ans);
    return ans;
}

console.log(uniqueElement("abcdabcdefgggh")); //op: abcdefgh
