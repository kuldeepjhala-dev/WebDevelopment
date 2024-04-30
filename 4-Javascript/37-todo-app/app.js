let addTaskbutton = document.querySelector("#addTask");
let ul = document.querySelector("ul");

addTaskbutton.addEventListener("click", function () {
    let input = document.querySelector("input");
    let newTaskElement = document.createElement("li");
    let newDeleteButton = document.createElement("button");

    newDeleteButton.innerText = "Delete"
    newDeleteButton.classList.add("removeTask");
    newTaskElement.innerText = input.value;
    newTaskElement.appendChild(newDeleteButton);
    ul.appendChild(newTaskElement);
    input.value = "";
});

//This method will not delete the  new added todo's.
// let removeTaskbuttons = document.querySelectorAll(".removeTask");
// for (delBtn of removeTaskbuttons) {
//     delBtn.addEventListener("click", function () {
//         let parent = this.parentElement;
//         console.log(parent);
//         parent.remove();
//     });
// }

//we use event Deligation technique.
//when we click on ul, which has 2 child. (ListItem and button).
//When click event is triggered on any one of them then we will know which one is clicked by 'event.target.nodeName'.
//Now we know what is clicked. If listItem is clicked then we will we will do nothing.
//If button is clicked then we will try to get the parent element of that button which is listItem.
//That listItem contains listItem(todo) & button.
//Now we will remove that listitem.
ul.addEventListener("click", function (event) {
    if (event.target.nodeName == "BUTTON") {
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("deleted");
    }
})