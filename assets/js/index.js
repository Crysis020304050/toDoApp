'use strict';

const tasks = [];

const mainContainer = document.getElementsByClassName("mainContainer")[0];

const addTaskButton = document.getElementById("addTask");
/*
const valueFromInput = document.getElementsByClassName("inputValue" )[0];*/
const tasksListElem = document.getElementById("tasksList");



   /* mainContainer.appendChild(createPendingTasksSign());



    mainContainer.appendChild(createInputTextHolder());*/






function createPendingTasksSign() {
    const pendingTaskSignContainer = document.createElement("div");
    pendingTaskSignContainer.classList.add("pendingTasks");
    pendingTaskSignContainer.innerText = "Pending tasks";
    tasksListElem.innerHTML = "";
    tasks.forEach( task => {
        tasksListElem.appendChild(createTask(task));
    });

    
    return pendingTaskSignContainer;
}

function createTask(task) {
    const taskContainer = document.createElement("li");
    taskContainer.classList.add("task");
    
    const taskText = document.createElement("div");
    taskText.classList.add("userTask");
    taskText.innerText = getTaskInnerText();
    
    const completeButton = document.createElement("label");
    completeButton.classList.add("completeButton");
    completeButton.innerText = "Complete";
    const completeButtonCheckbox = document.createElement("input");
    completeButtonCheckbox.setAttribute("type", "checkbox")
    completeButton.appendChild(completeButtonCheckbox);
    
    const removeButton = document.createElement("div");
    removeButton.classList.add("removeButton");
    removeButton.innerText = "X";

    /*removeButton.addEventListener('click', (event) => {
        event.stopPropagation();
        const userTaskList = document.getElementById();
        userListItemElement.classList.add("deletingUserCard");
        setTimeout( () => {userListItemElement.remove();}, 200 );
        /!*userListItemElement.remove();*!/
    });*/
    
    taskContainer.appendChild(taskText);
    taskContainer.appendChild(completeButton);
    taskContainer.appendChild(removeButton);
    
    return taskContainer;    
    
}

function createInputTextHolder() {
    const inputTextContainer = document.createElement("div");
    inputTextContainer.classList.add("inputTask");
    
    const inputHolder = document.createElement("input");
    inputHolder.classList.add("inputValue");
    inputHolder.setAttribute("type", "text");
    inputHolder.setAttribute("placeholder", "Write a new task");
    
    const addTaskButton = document.createElement("div");
    addTaskButton.setAttribute("id", "addTask");
    addTaskButton.innerText = "Add";
    
    inputTextContainer.appendChild(inputHolder);
    inputTextContainer.appendChild(addTaskButton);

    addTaskButton.addEventListener('click', event => {
       event.stopPropagation();
       const textInInput = document.getElementsByClassName("inputValue")[0];
       tasks.unshift(textInInput.value);

       textInInput.value = "";

       
    });
    
    return inputTextContainer;
}





function getTaskInnerText(tasks) {
    if (tasks.length > 1) {
        return tasks[0];
    }
    return null;
}