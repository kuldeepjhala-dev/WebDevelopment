//A string is a golden string if it starts with the character 'A' or 'a' and has a total length greater than 5. For a given string print if it is golden or not.
let str1 = "acferg";
let str2 = "Acferg";
let str3 = "aferg";
let str4 = "Aferg";
let str5 = "sdf";
let str6 = "skjnvdfv";

let final = str1;

if ((final[0] == 'a' || final[0] == 'A') && (final.length > 5)) {
    console.log("Golden String");
}
else {
    console.log("Not a Golden String");
}

