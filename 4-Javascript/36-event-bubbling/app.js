let div = document.querySelector("div");
let ul = document.querySelector("ul");
let li = document.querySelector("li");

//if we click the inner-child div then it will atomatically call the events of its parents.
//In order to avoid this we use 'event.stopPropogation()'. It will not call the parent's, it will onluy execute its own event.  


li.addEventListener("click", (event) => {
    event.stopPropagation();
    console.log("li clicked");
})

ul.addEventListener("click", (event) => {
    event.stopPropagation();
    console.log("ul clicked");
})

div.addEventListener("click", () => {
    console.log("div clicked");
})

