const addInput = document.getElementById("add__input");
const addBtn = document.getElementById("add__btn");
const todoBoard = document.getElementById("todo__board");

window.addEventListener("DOMContentLoaded", setupTask);

addBtn.addEventListener("click", function () {
    const id = new Date().getTime().toString();

    if (!addInput.value) alert("Pls. input the task");
    else {
        createTask(id, addInput.value);
        addLocalStorage(id, addInput.value);
        addInput.value = "";
    }
});

function createTask(id, val) {
    let newItem = document.createElement("div");
    newItem.classList.add("task");
    newItem.setAttribute("task-id", id);

    let taskContent = document.createElement("div");
    taskContent.innerText = val;
    taskContent.classList.add("task__content");
    newItem.appendChild(taskContent);

    let checkBtn = document.createElement("button");
    checkBtn.innerHTML = '<i class="bi bi-check-square"></i>';
    checkBtn.classList.add("check__task");
    newItem.appendChild(checkBtn);

    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = '<i class="bi bi-trash"></i>';
    deleteBtn.classList.add("delete__task");
    newItem.appendChild(deleteBtn);

    checkBtn.addEventListener("click", function () {
        taskContent.classList.toggle("clicked");
    });
    deleteBtn.addEventListener("click", function () {
        todoBoard.removeChild(newItem);
        removeFromLocalStorage(id);
    });

    todoBoard.appendChild(newItem);
}

// ***** INITIAL SETUP *********
function setupTask() {
    const taskList = getLocalStorage();
    if (taskList.length !== 0) {
        taskList.forEach((task) => {
            createTask(task.id, task.val);
        });
    }
    console.log(taskList);
}

// ***** LOCAL STORAGE *********
function addLocalStorage(id, val) {
    const task = { id, val };
    let taskList = getLocalStorage();
    taskList.push(task);
    localStorage.setItem("task-list", JSON.stringify(taskList));
}

function removeFromLocalStorage(id) {
    let taskList = getLocalStorage();
    taskList = taskList.filter((task) => task.id !== id);
    localStorage.setItem("task-list", JSON.stringify(taskList));
}

function getLocalStorage() {
    return localStorage.getItem("task-list")
        ? JSON.parse(localStorage.getItem("task-list"))
        : [];
}
