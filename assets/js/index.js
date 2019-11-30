'use strict';

const tasks = [];


const tasksListElem = document.getElementById("tasksList");




function createTask(task) {
    const taskContainer = document.createElement("div");
    taskContainer.classList.add("task");


    taskContainer.setAttribute("id", `${tasks.indexOf(task)}`);
    
    const taskText = document.createElement("div");
    taskText.classList.add("userTask");
    taskText.innerText = task;
    
    const completeButton = document.createElement("label");
    completeButton.classList.add("completeButton");
    completeButton.innerText = "Complete";
    const completeButtonCheckbox = document.createElement("input");
    completeButtonCheckbox.setAttribute("type", "checkbox");
    completeButton.appendChild(completeButtonCheckbox);
    
    const removeButton = document.createElement("div");
    removeButton.classList.add("removeButton");
    removeButton.innerText = "X";

    removeButton.addEventListener('click', (event) => {
        event.stopPropagation();
        const userTaskList = document.getElementById(`${tasks.indexOf(task)}`);
        userTaskList.remove();

    });

    if (completeButtonCheckbox.checked) {
        taskText.classList.add("userTaskDone");
    }
    
    taskContainer.appendChild(taskText);
    taskContainer.appendChild(completeButton);
    taskContainer.appendChild(removeButton);
    
    return taskContainer;    
    
}

const addTaskButton = document.getElementById("addTask");
addTaskButton.addEventListener('click', event => {
    event.stopPropagation();
    const textInInput = document.getElementsByClassName("inputValue")[0];
    if (tasks.indexOf(textInInput.value) === -1) {
        tasks.push(textInInput.value);
        textInInput.value = "";
        tasksListElem.appendChild(createTask(tasks[tasks.length-1]));
    }



});



