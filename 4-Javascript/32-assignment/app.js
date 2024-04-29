// Qs1.Create a new input and button element on the page using JavaScript only.Set the
// text of button to “Click me”;

// Qs2.Add following attributes to the element:
// - Change placeholder value of input to “username”
// - Change the id of button to “btn”

// Qs3.Access the btn using the querySelector and button id. Change the button
// background color to blue and text color to white.

// Qs4.Create an h1 element on the page and set its text to “DOM Practice” underlined.
// Change its color to purple.

// Qs5.Create a p tag on the page and set its text to “Apna College Delta Practice”,
// where Delta is bold.
let body = document.querySelector("body");

let input = document.createElement("input");
input.type = "text";
// input.placeholder = "username";
input.setAttribute("placeholder", "username");

let button = document.createElement("button");
button.innerText = "Click me";
// button.id = "btn";
button.classList.add("btnCss");

body.append(input);
body.append(button);

let hr = document.createElement("hr");

let h1 = document.createElement("h1");
h1.innerText = "DOM Practice";
h1.style.textDecoration = "underline";
h1.style.color = "purple";

body.insertAdjacentElement("afterend", h1);

let p = document.createElement("p");
p.innerHTML = "Apna college <b>Delta</b> Practice";
body.append(p);