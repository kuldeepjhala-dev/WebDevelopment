let button = document.createElement("button");
button.innerText = "Click me";
button.classList.add("btnClass");
console.log(button);

document.querySelector("body").append(button);

let btn = document.querySelector(".btnClass");
btn.addEventListener("click", () => {
    button.style.backgroundColor = "green";
});