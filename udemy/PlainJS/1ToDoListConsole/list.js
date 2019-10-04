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

//button events
let times = 0;
let button = document.querySelector("button");
button.addEventListener("click", function(){
    alert("button was clicked!");
    if (times === 0) {
        console.log(button);
        button.innerHTML = "Do NOT Click Again";
        times++;
    } else {
        button.style.display = "none";
    } 
});  

//ordered list events
let listItems = document.querySelectorAll("li");
for (let i=0; i < listItems.length; i++) {
    listItems[i].addEventListener("click", function(){
        this.style.color = "blue";
        this.style.textDecoration = "line-through";
    });
}


}, 500);


