//Storing values of array into multiple variable
let names = ["tony", "bruce", "peter", "steve", "Ram", "shyam", "honey", "hon"];
//let winner = names[0];
//let runnerup = names[1];
//let secondRunnerUp = names[2];

let [winner, runnerUp, secondRunnerUp, ...others] = names;

console.log(winner); //op: tony
console.log(runnerUp); //op: bruce
console.log(secondRunnerUp); //op: peter

console.log(others); //op: [ 'steve', 'Ram', 'shyam', 'honey', 'hon' ]
