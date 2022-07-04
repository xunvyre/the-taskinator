var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");    //establish variables
var taskIdCounter = 0;

var taskFormHandler = function(event)                     //define function
{
    event.preventDefault();

    var taskNameInput = document.querySelector("input[name='task-name']").value;  //select the element 'input' that has a name value of 'task-name
    var taskTypeInput = document.querySelector("select[name='task-type']").value; //select the element that has a name value of 'task-type'
    
    if (!taskNameInput || !taskTypeInput)
    {
        alert("You need to complete the task form!");
        return false;
    };
    
    var taskDataObj =       //package data as an object
    {
        name: taskNameInput,
        type: taskTypeInput
    };

    formEl.reset();
    createTaskEl(taskDataObj); //send as an argument to createTaskEl
};

var createTaskEl = function(taskDataObj)
{
    var listItemEl = document.createElement("li");     //create a new item
    listItemEl.className = "task-item";                //style the item

    listItemEl.setAttribute("data-task-id", taskIdCounter);     //add task id as a custom attribute

    var taskInfoEl = document.createElement("div");     //create div to hold info and list item
    taskInfoEl.className = "task-info";                //class name
    taskInfoEl.innerHTML = "<h3 class='task-name'>" +taskDataObj.name+ "</h3><span class='task-type'>" +taskDataObj.type+ "</span>";  //add html content to div
    listItemEl.appendChild(taskInfoEl);                //append to end of list item

    var taskActionsEl = createTaskActions(taskIdCounter);   //create buttons that correspond to the current taskId
    listItemEl.appendChild(taskActionsEl);      //append buttons to name and type

    tasksToDoEl.appendChild(listItemEl);               //add item to the end of the current task list 

    taskIdCounter++;                                   //increase task counter for next unique id
};

var createTaskActions = function(taskId)
{
    var actionContainerEl = document.createElement("div");  //create new div
    actionContainerEl.className = "task-actions";   //style div

    var editButtonEl = document.createElement("button");    //create edit button
    editButtonEl.textContent = "Edit";      //label button
    editButtonEl.className = "btn edit-btn";    //style button
    editButtonEl.setAttribute("data-task-id", taskId);  //attatch button to the unique element id

    actionContainerEl.appendChild(editButtonEl);    //add button after previous elements

    var deleteButtonEl = document.createElement("button");    //create delete button
    deleteButtonEl.textContent = "Delete";      //label button
    deleteButtonEl.className = "btn delete-btn";    //style button
    deleteButtonEl.setAttribute("data-task-id", taskId);  //attatch button to the unique element id

    actionContainerEl.appendChild(deleteButtonEl);    //add button after previous elements

    var statusSelectEl = document.createElement("select");
    statusSelectEl.className = "select-status";
    statusSelectEl.setAttribute("name", "status-change");
    statusSelectEl.setAttribute("data-task-id", taskId);

    actionContainerEl.appendChild(statusSelectEl);

    var statusChoices = ["To Do", "In Progress", "Completed"]
    for (var i = 0; i < statusChoices.length; i++)
    {
        var statusOptionEl = document.createElement("option");      //create option element
        statusOptionEl.textContent = statusChoices[i];
        statusOptionEl.setAttribute("value", statusChoices[i]);

        statusSelectEl.appendChild(statusOptionEl);
    }

    return actionContainerEl;    
};

formEl.addEventListener("submit", taskFormHandler);   //call function based on the submit action

