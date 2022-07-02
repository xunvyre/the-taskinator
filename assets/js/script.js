var buttonEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");    //establish variables

var createTaskHandler = function()                     //define function
{
    var listItemEl = document.createElement("li");     //create a new item
    listItemEl.className = "task-item";                //style the item
    listItemEl.textContent = "This is a new task.";    //add text
    tasksToDoEl.appendChild(listItemEl);               //add item to the end of the current task list
};

buttonEl.addEventListener("click", createTaskHandler); //call function based on an action

