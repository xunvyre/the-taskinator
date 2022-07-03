var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");    //establish variables

var taskFormHandler = function(event)                     //define function
{
    event.preventDefault();

    var taskNameInput = document.querySelector("input[name='task-name']").value;  //select the element 'input' that has a name value of 'task-name
    var taskTypeInput = document.querySelector("select[name='task-type']").value; //select the element that has a name value of 'task-type'

    var taskDataObj =       //package data as an object
    {
        name: taskNameInput,
        type: taskTypeInput
    };

    createTaskEl(taskDataObj); //send as an argument to createTaskEl
};

var createTaskEl = function(taskDataObj)
{
    var listItemEl = document.createElement("li");     //create a new item
    listItemEl.className = "task-item";                //style the item

    var taskInfoEl = document.createElement("div");     //create div to hold info and list item
    taskInfoEl.className = "task-info";                //class name
    taskInfoEl.innerHTML = "<h3 class='task-name'>" +taskDataObj.name+ "</h3><span class='task-type'>" +taskDataObj.type+ "</span>";  //add html content to div
    
    listItemEl.appendChild(taskInfoEl);                //
    
    tasksToDoEl.appendChild(listItemEl);               //add item to the end of the current task list 
};

formEl.addEventListener("submit", taskFormHandler);   //call function based on the submit action

