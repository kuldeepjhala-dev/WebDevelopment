//when running the code in console pass the arguments
// node 2-process-argv.js hello world 1 2 3


// console.log(process.argv);
//op:
// [
//     'C:\\Program Files\\nodejs\\node.exe',
//     'D:\\WebDevelopment\\5-Backend\\1-node-js\\2-process-argv.js',
//     'hello',
//     'world',
//     '1',
//     '2',
//     '3'
// ]

let args = process.argv;
for (let i = 2; i < args.length; i++) {
    console.log(args[i]);
}
// op:
// hello
// world
// 1
// 2
// 3