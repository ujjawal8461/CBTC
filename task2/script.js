document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const input = document.querySelector(".todoInput");
    const list = document.querySelector(".listSection");
    const tasks = []; 

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const taskText = input.value.trim();

        if (taskText === "") return;

        const taskItem = document.createElement("div");
        taskItem.classList.add("taskItem");

        const checkpoint = document.createElement("div");
        checkpoint.classList.add("checkpoint");

        const taskDescription = document.createElement("div");
        taskDescription.classList.add("taskDescription");
        taskDescription.textContent = taskText;

        const deleteButton = document.createElement("button");
        deleteButton.classList.add("deleteButton");
        deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>'; 

        checkpoint.addEventListener("click", function () {
            taskItem.classList.toggle("completed");
            if (taskItem.classList.contains("completed")) {
                taskDescription.style.textDecoration = "line-through";
                taskItem.style.opacity = 0.5;
            } else {
                taskDescription.style.textDecoration = "none";
                taskItem.style.opacity = 1;
            }
        });

        deleteButton.addEventListener("click", function () {
            list.removeChild(taskItem);
            const index = tasks.indexOf(taskItem);
            if (index !== -1) {
                tasks.splice(index, 1);
            }
        });

        taskItem.appendChild(checkpoint);
        taskItem.appendChild(taskDescription);
        taskItem.appendChild(deleteButton);

        tasks.push(taskItem); 

        list.appendChild(taskItem);

        input.value = "";
    });

    function filterTasks(status) {
        tasks.forEach(function (taskItem) {
            if (status === "All") {
                taskItem.style.display = "flex"; 
            } else if (status === "Completed") {
                if (taskItem.classList.contains("completed")) {
                    taskItem.style.display = "flex"; 
                } else {
                    taskItem.style.display = "none";
                }
            } else if (status === "Incomplete") {
                if (!taskItem.classList.contains("completed")) {
                    taskItem.style.display = "flex"; 
                } else {
                    taskItem.style.display = "none";
                }
            }
        });
    }

    const dropdownItems = document.querySelectorAll(".dropdown-content a");
    dropdownItems.forEach(function (item) {
        item.addEventListener("click", function (e) {
            e.preventDefault();
            const filterOption = item.textContent;
            filterTasks(filterOption);
        });
    });
});
