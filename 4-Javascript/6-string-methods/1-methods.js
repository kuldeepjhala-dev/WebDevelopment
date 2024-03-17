//trim() 
let msg = "    Hel lo    ";
console.log(msg); //op;    Hel lo     - whitespaces are not removed
console.log(msg.trim()); //op:Hel lo  - whitespaces are removed from start and end.

//toUpperCase() - toLowerCase()
let msg2 = "hiii";
let msg3 = "HIII";
console.log(msg2.toUpperCase()); //op: HIII
console.log(msg3.toLowerCase()); //op: hiii

//indexOf()
let msg4 = "ILoveCoding";
console.log(msg4.indexOf("Love")); //op: 1
console.log(msg4.indexOf("j")); //op: -1
console.log(msg4.indexOf("o")); //op: 2

//method chaning
let msg5 = "  HellO   ";
console.log(msg5.trim().toUpperCase()); //op: HELLO

//slice()
let msg6 = "ILoveCoding";
console.log(msg6.slice(0, 1)); //op:I
console.log(msg6.slice(0)); //op:ILoveCoding
console.log(msg6.slice(1, 5)); //op: Love
console.log(msg6.slice(5, 8)); //op: cod
console.log(msg6.slice(-2)); //op: ng
console.log(msg6.slice(-10)); //op: LoveCoding

//replace()
let msg7 = "ILoveCoding";
console.log(msg7.replace("Love", "Hate")); //op: IHateCoding
console.log(msg7.replace("o", "x")); //op: ILxveCoding

//repeat()
let msg8 = "Repeat";
console.log(msg8.repeat(2)); //op:RepeatRepeat
console.log(msg8.repeat(4)); //op:RepeatRepeatRepeatRepeat

