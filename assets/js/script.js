var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");    //establish variables

var createTaskHandler = function(event)                     //define function
{
    event.preventDefault();
    
    var listItemEl = document.createElement("li");     //create a new item
    listItemEl.className = "task-item";                //style the item
    listItemEl.textContent = "This is a new task.";    //add text
    tasksToDoEl.appendChild(listItemEl);               //add item to the end of the current task list
};

formEl.addEventListener("submit", createTaskHandler);   //call function based on the submit action

