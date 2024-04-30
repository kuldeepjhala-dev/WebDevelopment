// Qs1.Try out the following events in Event Listener on your own:
// - mouseout
// - keypress
// - Scroll
// - load

// mouseOutEvent
let div = document.querySelector("div");

div.addEventListener("mouseout", () => {
    console.log("mouseOut");
})

//keypress
let inp = document.querySelector("#q2");
inp.addEventListener("keypress", (event) => {
    console.log(event.key);
});

//load
window.addEventListener("load", (event) => {
    console.log("page is fully loaded");
});