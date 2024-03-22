
//todo  - datastructure
let todo = ["one", "two", "three"];

//take choice as input
let choice = prompt(" OUT 'list' to show todo | 'add' to add todo | 'delete' to delete todo | 'quit' to quit app ");


while (true) {

    //quit app
    if (choice == 'quit') {
        console.log("Exiting... app");
        break;
    }

    //show task
    else if (choice == 'list') {
        console.log("--------------Task to do--------------");
        for (let i = 0; i < todo.length; i++) {
            console.log(`task ${i + 1} : ${todo[i]}`);
        }
    }

    //add task
    else if (choice == 'add') {
        let newTask = prompt("Enter the task to add");
        todo.push(newTask);
        console.log("--------------New task added--------------");
        console.log("task added : ", newTask);
    }

    //delete task
    else if (choice == 'delete') {
        let itemDelete = prompt(`which task you want to delete}`);
        let indexOfTaskToBeDeleted = todo.indexOf(itemDelete);
        if (todo.splice(indexOfTaskToBeDeleted, 1) != -1) {
            console.log("--------------task deleted--------------");
        }
        else {
            console.log("Please enter correct task to delete");
        }
    }
        
    //enter proper choice
    else {
        console.log("Please enter proper choice");
    }

    //take choice as input
    choice = prompt("IN 'list' to show todo | 'add' to add todo | 'delete' to delete todo | 'quit' to quit app ");

}

console.log("App close");