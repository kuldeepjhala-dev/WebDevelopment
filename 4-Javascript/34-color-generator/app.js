let btn = document.querySelector("button");
let h3 = document.querySelector("h3");
let colorBox = document.querySelector("div");

let getRandomNo = () => { return Math.floor(Math.random() * 255) };

btn.addEventListener("click", function () {

    let red = getRandomNo();
    let green = getRandomNO();
    let blue = getRandomNo();
    
    let rgbValue = `rgb(${red}, ${green}, ${blue})`;

    h3.innerText = rgbValue;
    colorBox.style.backgroundColor = rgbValue;
});

