const addInput = document.getElementById("add__input");
const addBtn = document.getElementById("add__btn");
const todoBoard = document.getElementById("todo__board");

addBtn.addEventListener("click", function () {
    let newItem = document.createElement("div");
    newItem.classList.add("task");

    let taskContent = document.createElement("div");
    taskContent.innerText = `${addInput.value}`;
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

    if (!addInput.value) alert("Pls. input the task");
    else {
        todoBoard.appendChild(newItem);
        addInput.value = "";
    }

    checkBtn.addEventListener("click", function () {
        taskContent.classList.toggle("clicked");
    });
    deleteBtn.addEventListener("click", function () {
        todoBoard.removeChild(newItem);
    });
});
