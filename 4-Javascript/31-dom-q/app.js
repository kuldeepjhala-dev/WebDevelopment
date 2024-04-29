let newPara = document.createElement("p");
newPara.style.color = "red";
newPara.innerText = "hey I'm Red";

let newH3 = document.createElement("h3");
newH3.style.color = "blue";
newH3.innerText = "I'm a blue h3!";

let newh1 = document.createElement("h1");
newh1.innerText = "I'm in a div";

let newp = document.createElement("p");
newp.innerText = "Me too!";

let div = document.createElement("div");
div.classList.add("divStyle");
div.insertAdjacentElement("afterbegin", newh1);
div.insertAdjacentElement("beforeend", newp);

let body = document.querySelector("body");

body.append(newPara);
body.append(newH3);
body.append(div);