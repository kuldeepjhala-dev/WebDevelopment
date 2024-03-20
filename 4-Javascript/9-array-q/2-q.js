let months = ["january", "july", "march", "august"];
months.splice(0, 2, "july", "june");
console.log(months); //op: [ 'july', 'june', 'march', 'august' ]

let lang = ["c", "c++", "html", "javascript", "python", "java", "c#", "sql"];
console.log(lang.reverse()); //op: [ 'sql', 'c#', 'java', 'python', 'javascript', 'html', 'c++', 'c' ]
console.log(lang.indexOf("javascript")); //op: 4

let lang2 = ["c", "c++", "html", "javascript", "python", "java", "c#", "sql"];
console.log(lang2.reverse().indexOf("javascript")); //op: 4