//For the given string : let msg = "   help!  ". Trim it & convert it to uppercase.
let msg = "   help!  ";
msg = msg.trim().toUpperCase();
console.log(msg); //op:HELP!

//For the string -> let name = "ApnaCollege", predict the output of the following :
let name = "ApnaCollege";
console.log(name.slice(4, 9)); //op: Colle
console.log(name.indexOf("na")); //op: 2
console.log(name.replace("Apna", "Our"));

console.log(name.slice(4).replace("l", "t")); //op: cotlege

let newStr = name.slice(4).replace("l", "t");
console.log(newStr.replace("l", "t")); //op: cottege

console.log(name.slice(4).replace("l", "t").replace("l", "t")); //op: cottege