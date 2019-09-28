window.setTimeout(function() {

let tasks = ["Walk Dog (1pm)"];
let input = prompt("What would you like to do?");

while (input !== "quit") {
    if (input === "list") {
        listTasks();
    } else if (input === "new") {
        let newTask = prompt("Enter new task");
        tasks.push(newTask);
        listTasks();
    } else if (input === "delete") {
        let index = prompt("Type in index of task to delete:");
        tasks.splice(index, 1);
        listTasks();
    }
    input = prompt("What would you like to do?");
}
console.log("Logged out of To-Do-List App - GOODBYE");

function listTasks()  {
    tasks.forEach((task, i) => {console.log( (i )+ " : " + task)});
        console.log("*************************");
}
}, 500);