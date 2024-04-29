//document.all will return a collection through which we can access all the elements(stored in key:value pair).
console.log(document.all);

//we can select any element from the website by specifing the index in 'document.all[n]', and it will return an object.
console.log(document.all[8]); //op: h1 element object

//we can access the key's of the object and we can get the data.
console.log(document.all[8].innerHTML);

//this will change the text of the h1 element.
document.all[8].innerHTML = "text changed using 'document.all[8].innerHTML '";

//getElementById is a method of document, using which we can select using their id name.
//It will return the object of the html element.
let imageObj = document.getElementById("mainImg");
console.dir(imageObj);
console.log(imageObj.src);
console.log(imageObj.tagName);

//getElementByClassName will return an HTML Collection.
const oldImage = document.getElementsByClassName("oldImg");
console.log(oldImage);
for (let img of oldImage) {
    img.src = "assets/spiderman_img.png";
}

//getElementByTagName() - returns the element as an html collection or empty collection (if not found).
console.log(document.getElementsByTagName("p"));

document.getElementsByTagName("p")[1].innerHTML = "paragraph tag changed by getElementsByTagName('p')[1].innerHTML='string'"

//querySelector allows  to use any CSS selector
console.dir(document.querySelector("h1")); //op: h1 object
console.dir(document.querySelector("#description")); //we can also select using id
console.dir(document.querySelector(".oldImg")) // we can also choose by className
console.dir(document.querySelector("div a")); // we can also chood inner element using parent-element and the writing inner element

//querySelectorAll returns all the child element in a 'nodeList'.
console.dir(document.querySelectorAll("div a")); //op: 'NodeList' containing all child nodes, it will return all anchor elements inside the div

//DOM-MANIPULATION

let para = document.querySelector("p");
console.dir(para); //op: object of paragraph

console.dir(para.innerHTML);
//op:
//<b>Spider-Man</b> is a superhero appearing in American comic books
//      published by
//    < a href = "https://www.google.com/search?q=Marvel+Comics" > Marvel Comics</ >.
//      Created by writer - editor < b > Stan Lee</ > and artist < b > Steve Ditko</ >, he
//      first appeared in the anthology comic book
//    < a href = "https://www.google.com/search?q=Amazing+Fantasy" > Amazing Fantasy</ >
//    #15(August 1962) in the < a href = "#" > Silver Age of Comic Books</ >.He has
//      been featured in comic books, television shows, films, video games,
//    novels, and plays

console.dir(para.innerText);
// op: Spider-Man is a superhero appearing in American comic books published by Marvel Comics. Created by writer-editor Stan Lee and artist Steve Ditko, he first appeared in the anthology comic book Amazing Fantasy #15 (August 1962) in the Silver Age of Comic Books. He has been featured in comic books, television shows, films, video games, novels, and plays

console.dir(para.textContent);
//op: Spider-Man is a superhero appearing in American comic books
//   published by
//   Marvel Comics.
//   Created by writer - editor Stan Lee and artist Steve Ditko, he
//   first appeared in the anthology comic book
//   Amazing Fantasy
//   #15(August 1962) in the Silver Age of Comic Books.He has
//   been featured in comic books, television shows, films, video games,
// novels, and plays


let para2 = document.querySelector("#para2");
let para3 = document.querySelector("#para3");

//innerText will not recognize the html tags, it will consider it as a button.
para2.innerText = "value changed by para2.innerText='value'; <button>hello</button>";
//innerHTML will recognize the inner html elements, which are written as string.
para3.innerHTML = "value changed by para2.innerHTML='value'; <button>hello</button>";

let img = document.querySelector("#mainImg");

//here the typeof id is 'mainImg'.
console.log(img.getAttribute('id'));//op: mainImg

img.setAttribute('id', 'spiderManImage');
//id is changed from mainImg to spiderManImage
console.log(img.getAttribute('id'));//op: spiderManImage

let mainImage = document.querySelector('#spiderManImage');
mainImage.setAttribute('src', 'assets/creation_1.png');

//changing the background color using style object of selected element. It will return the inline css of that element.
//inline style is applied on the element so it is not preferred to use the style attribute.
let heading = document.querySelector("h1");
heading.style.backgroundColor = "yellow";
heading.style.color = "green";

let links = document.querySelectorAll(".box a");
for (let i = 0; i < links.length; i++) {
    links[i].style.color = "purple";
}

//we can use get the class list using obj.classList
let imageClasses = document.querySelector("img");
console.log(imageClasses.classList); //it returns class list

//we can do add(), remove(), contains() toggle() the classes using classList.
let heading4 = document.querySelector("h4");
console.log(heading.classList); //op: empty as there is no class in h4 element
//now we are adding css class classListAdd to heading4 element. 'classListAdd' class was already declared in the style.css.
heading4.classList.add("classListAdd");
// heading4.classList.remove("classListAdd"); //We can remove the class using classList.remove() method.
console.log(heading4.classList.contains("udemy")); //op: false
console.log(heading4.classList.contains("classListAdd")); //op: true
//classListAdd is currently added in the list
heading4.classList.toggle("classListAdd"); //It will remove the 'classListAdd' as it was previously true.
//Now classListAdd is removed from the list, it is not present
heading4.classList.toggle("classListAdd"); //As now we are again toggling the classListAdd will again applied on heading4
document.querySelector(".box").classList.add("yellow");

//navigation - we can get the parentElement, childreElement, previousSibilingElement, nextSibilingElement from the current element using navigate.
let h4Element = document.querySelector('h4');
console.log(h4Element.parentElement); //it will return the parent element whole block.
console.log(h4Element.children); //it will return empty collection as there is no child

let ul = document.querySelector('ul');
console.log(ul.parentElement);
console.log(ul.children);
console.log(ul.children[0]); //op: publisher
console.log(ul.children[1]); //op: first apperance 
console.log(ul.children[2]); //op: created by
console.log(ul.children[1].previousElementSibling);  //op: publisher
console.log(ul.children[1].nextElementSibling); //op: created by

let hello = document.querySelector('.hellocls');
console.log("hello");
console.log(hello.nextElementSibling.style.color = "pink");

//Adding element on page
let newp = document.createElement('p'); //creating new element
newp.innerText = "Hello i am added using document.createElement('p')"; //adding data in new element 
console.dir(newp);

let body = document.querySelector("body"); //selecting element where we want to insert new element
body.appendChild(newp); //appending new child element

let box = document.querySelector('.box'); //selecting element where we want to insert new element
box.appendChild(newp); //appending new element in box element 

let btn = document.createElement("button");
console.dir(btn);
btn.innerText = "click me";
box.appendChild(btn);

//we can append content(text) + new element in parent element using append().
newp.append(":::I am appending using newp.append(values of string type)", btn);
newp.append("Do not click this btn")

let newp2 = document.createElement("p");
newp2.innerText = "Hello i am newp2 element"
box.prepend(newp2);

let btn2 = document.createElement("button");
btn2.innerText = "Dont click me";
let par = document.querySelector('#description');
//we can insert it at part of par, beforebegin, afterbegin, afterend, beforeend.
// par.insertAdjacentElement('beforebegin', btn2);
// par.insertAdjacentElement('afterbegin', btn2);
// par.insertAdjacentElement('afterend', btn2);
par.insertAdjacentElement('beforeend', btn2);

//we can also remove element using remove()
let lastImage = document.getElementById("oldImageLast");
lastImage.remove();