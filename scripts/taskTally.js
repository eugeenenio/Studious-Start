// taskTally.js

let tasks = [];

function addTask() {
    const taskInput = document.getElementById("task-input").value.trim();
    if (taskInput) {
        tasks.push(taskInput);
        displayTasks();
        document.getElementById("task-input").value = ""; // Clear input
    }
}

function displayTasks() {
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.textContent = task;
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "X";
        deleteButton.onclick = () => deleteTask(index);
        li.appendChild(deleteButton);
        taskList.appendChild(li);
    });
}

function deleteTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}
