let months = ["january", "july", "march", "august"];

// months[0] = months[1];
// months[1] = "june";

months.shift();
months.shift();
months.unshift("june");
months.unshift("july");

console.log(months); //op: 