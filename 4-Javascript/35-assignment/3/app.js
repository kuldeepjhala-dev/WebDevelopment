// Create an input element on the page with a placeholder ”enter your name” and an
// H2 heading on the page inside HTML.
// The purpose of this input element is to enter a user’s name so it should only input
// letters from a - z, A - Z and space(all other characters should not be detected).
// Whenever the user inputs their name, their input should be dynamically visible inside
// the heading.
// [Please note that no other character apart from the allowed characters should be
// visible in the heading]

let h1 = document.querySelector("h2");
let inp = document.querySelector("input");

inp.addEventListener("keydown", (event) => {
    let value = (event.key).charCodeAt(0);
    console.log(event.key);
    if (value >= 65 && value <= 90 || value >= 97 && value <= 122 || value == 32) {
        if (value == 32) {
            h1.innerText = h1.innerText + " ";
        }
        h1.innerText = h1.innerText + event.key;
    }
});