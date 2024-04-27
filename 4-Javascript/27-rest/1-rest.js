//allows function to take an indefinite number of arguments and bundle them in an array

function sum(...args) {
    //arguments
    for (let i = 0; i < args.length; i++) {
        console.log("You gave us:", args[i]);
    }
}

function sum2(...args) {
    console.log(args.reduce((sum, el) => sum + el));
}

console.log(sum2(10, 20, 30)); //op: 60

sum(1, 2, 3, 4);
// op:
// You gave us: 1
// You gave us: 2
// You gave us: 3
// You gave us: 4

// console.log(arguments);
// op:
// [Arguments] {
//     '0': { },
//     '1': [Function: require] {
//         resolve: [Function: resolve] { paths: [Function: paths] },
//         main: {
//             id: '.',
//                 path: 'D:\\WebDevelopment\\4-Javascript\\27-rest',
//                     exports: { },
//             filename: 'D:\\WebDevelopment\\4-Javascript\\27-rest\\1-rest.js',
//                 loaded: false,
//                     children: [],
//                         paths: [Array]
//         },
//         extensions: [Object: null prototype] {
//             '.js': [Function(anonymous)],
//                 '.json': [Function(anonymous)],
//                     '.node': [Function(anonymous)]
//         },
//         cache: [Object: null prototype] {
//             'D:\\WebDevelopment\\4-Javascript\\27-rest\\1-rest.js': [Object]
//         }
//     },
//     '2': {
//         id: '.',
//             path: 'D:\\WebDevelopment\\4-Javascript\\27-rest',
//                 exports: { },
//         filename: 'D:\\WebDevelopment\\4-Javascript\\27-rest\\1-rest.js',
//             loaded: false,
//                 children: [],
//                     paths: [
//                         'D:\\WebDevelopment\\4-Javascript\\27-rest\\node_modules',
//                         'D:\\WebDevelopment\\4-Javascript\\node_modules',
//                         'D:\\WebDevelopment\\node_modules',
//                         'D:\\node_modules'
//                     ]
//     },
//     '3': 'D:\\WebDevelopment\\4-Javascript\\27-rest\\1-rest.js',
//         '4': 'D:\\WebDevelopment\\4-Javascript\\27-rest'
// }

function min(a, b, c, d) {
    console.log(arguments);
    console.log(arguments.length);
    console.log(arguments[0]);
    // arguments.push(10); //We cannot push int arguments because it is not a array it is a collection.
}

min(1, 2, 3, 4);
// op:
// [Arguments] { '0': 1, '1': 2, '2': 3, '3': 4 }
// 4
// 1

//Note:
//A rest parameter must be last in a parameter list
function min2(msg, ...args) {
    console.log(msg);
    return args.reduce((min, el) => {
        if (min > el) {
            return el;
        } else {
            return min;
        }
    });
}


console.log(min2("hello", 12, 3, 4));
//op:
//hello
//3 
