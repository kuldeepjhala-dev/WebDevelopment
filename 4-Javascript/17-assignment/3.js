// Write a JavaScript function that accepts a list of country names as input and
// returns the longest country name as output.
// Example : country = ["Australia", "Germany", "United States of America"]
// output: "United States of America"

const country = ["Australia", "Germany", "United States of America"];

function longestNameCountry(arrCountry) {
    let maxLength = 0;
    let longestCountry;
    arrCountry.forEach(element => {
        if (element.length > maxLength) {
            longestCountry = element;
        }
    });
    return longestCountry;
}

console.log(longestNameCountry(country)); //op: United States of America
