'use strict';

const tasks = [];

const TASK_PATTERN= /(?!^\s*?$)^.+$/;


const tasksListElem = document.getElementById("tasksList");

let counter = 0;



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

        counter--;
        const pendingTasks = document.getElementsByClassName("pendingTasks")[0];
        pendingTasks.innerText = `Pending tasks (${counter})`;

    });

    completeButtonCheckbox.addEventListener('change', event => {
        if (completeButtonCheckbox.checked) {
            taskText.classList.add("userTaskDone");
        }
        else {
            taskText.classList.remove("userTaskDone");
        }
    });


    taskContainer.appendChild(taskText);
    taskContainer.appendChild(completeButton);
    taskContainer.appendChild(removeButton);

    return taskContainer;

}

const addTaskButton = document.getElementById("addTask");
addTaskButton.addEventListener('click', event => {
    event.stopPropagation();
    const textInInput = document.getElementsByClassName("inputValue")[0];
    if (tasks.indexOf(textInInput.value) === -1 && textInInput.value.match(TASK_PATTERN)) {
        tasks.push(textInInput.value);
        textInInput.value = "";
        tasksListElem.appendChild(createTask(tasks[tasks.length-1]));
        counter++;

        const pendingTasks = document.getElementsByClassName("pendingTasks")[0];
        pendingTasks.innerText = `Pending tasks (${counter})`;
    }

    else {
        textInInput.classList.add("inputValueWrong");
        setTimeout(wrongValue, 200);
    }

    function wrongValue() {
        textInInput.classList.remove("inputValueWrong")
    }

});





