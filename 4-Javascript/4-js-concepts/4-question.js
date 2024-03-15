//Create a traffic light system that shows what to do based on color
let color = "red";

if (color === "red") {
    console.log("Stop");
}
else if (color === "yellow") {
    console.log("wait");
}
else if (color === "green") {
    console.log("go");
}
else {
    console.log("light is broken");
}


//Create a system to calculate popcorn prices based on the size customer asked for
let size = "L";

if (size === "XL") {
    console.log("Price: 250");
}
else if (size === "L") {
    console.log("Price: 200");
}
else if (size === "M") {
    console.log("Price: 100");
}
else if (size === "S") {
    console.log("Price: 50")
}
else {
    console.log("Please give correct size of popcorn");
}