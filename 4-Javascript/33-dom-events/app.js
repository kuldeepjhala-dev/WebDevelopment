// let btn = document.querySelector("button");
// btn.onclick = function () {
//     console.log("Hello world");
// }

// ---------------------------------------------------

let btns = document.querySelectorAll("button");
for (btn of btns) {
    // //below are two onclick on same btn so, only one will be called which is 'sayHii'.
    // btn.onclick = sayHello;
    // btn.onclick = sayHii;
    // btn.onmouseenter = function () {
    //     console.log("mouse entered");
    // };
    //below are also two event listener but both will be called
    // btn.addEventListener("click", sayHello);
    // btn.addEventListener("click", sayHii);
    btn.addEventListener("dblclick", function () {
        console.log("you diuble clicked me");
    });
}

function sayHello() {
    alert("Hello");
}

function sayHii() {
    alert("Hii");
}

// ---------------------------------
let p = document.querySelector("p");

p.addEventListener("click", function () {
    console.log("para is clicked");
})

let div = document.querySelector("div");

div.addEventListener("mouseenter", function () {
    console.log("mouse entered");
})

// -------------------------------------

//usage of this

let btnx = document.querySelector(".btnThis");
btnx.addEventListener("click", function () {
    console.log(this);
    console.log(this.innerText);
    this.style.backgroundColor = "blue";
})

// ----------------------------------------

//code redundancy removed using this keyword

let p1 = document.querySelector(".p1");
let p2 = document.querySelector(".p2");
let p3 = document.querySelector(".p3");
let p4 = document.querySelector(".p4");
let p5 = document.querySelector(".p5");

function changeColor() {
    console.dir(this.innerText);
    this.style.backgroundColor = "pink"
}

p1.addEventListener("click", changeColor);
p2.addEventListener("click", changeColor);
p3.addEventListener("click", changeColor);
p4.addEventListener("click", changeColor);
p5.addEventListener("click", changeColor);

// --------------------------------------------

let btn3 = document.querySelector(".btn3");

//here 'event' is called 'pointer-event'
// btn3.addEventListener("click", (event) => {
//     console.log(event);
//     console.log("button clicked");
// })

// btn3.addEventListener("dblclick", (event) => {
//     console.log(event);
//     console.log("button double clicked");
// })

// ----------------------------------------------

let input = document.querySelector("input");

//here 'event' is called 'KeyboardEvent'.
// event has two properties.
// 1. 'key' which gives which key  we have pressed.
// 2. 'code' gives the code of the key which we have pressed.
input.addEventListener("keydown", function (event) {
    // console.log("Key was pressed");
    // console.log(event);
    // console.log(event.key);
    // console.log(event.code);
    if (event.code == "ArrowUp") {
        console.log("Character moves up");
    } else if (event.code == "ArrowDown") {
        console.log("character moves  down");
    } else if (event.code == "ArrowLeft") {
        console.log("character moves left");
    }
    else if (event.code == "ArrowRight") {
        console.log("character moves  right");
    }
    else {
        console.log("some other key is pressed");
    }
});

input.addEventListener("keyup", function () {
    // console.log("Key was released");
})

// --------------------------------------------------------

//form events

let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
    event.preventDefault(); //It will block all the default things like action, etc.
    // console.log("form submitted");
    let uname = document.getElementById("uname");
    let upass = document.getElementById("upass");
    // console.dir(inp);
    // console.log(inp.innerText);//It will not give us value of the input textfield
    // console.log("uname: ", uname.value); //It will give us the value of input textfield
    // console.log("upass: ", upass.value);

    console.dir(form);

    let user = this.elements[0]; //form/element[0], same meaning.
    let pass = this.elements[1];

    console.log(user.value);
    console.log(pass.value);

    alert(`Hi ${user.value}, your password is set to ${pass.value}`);

});

// ---------------------------------------------------------------
//change event - The change event occurs when the value of an element has been changed (only works with <input>, <textarea>, <select> elements).

let form2 = document.querySelector("#form2");

form2.addEventListener("submit", function (event) {

    event.preventDefault();

});

let user2 = document.getElementById("uname2");
let upass2 = document.getElementById("upass2");

//change event is triggerred after final change.
user2.addEventListener("change", function () {
    console.log("final value change", this.value);
});
upass2.addEventListener("change", function () {
    console.log("final pass change", this.value);
});

//input is event is triggered after each change.
//It will not chnage on non characters value.
user2.addEventListener("input", function () {
    console.log("final value input", this.value);
});
upass2.addEventListener("input", function () {
    console.log("final pass input", this.value);
});

// -----------------------------------------------------------

let inputTxt = document.querySelector("#textEditorInput");
let pTxt = document.querySelector("#textEditorHeading");

inputTxt.addEventListener("input", function () {
    // console.log(inputTxt.value);
    pTxt.innerText = inputTxt.value; 
});

