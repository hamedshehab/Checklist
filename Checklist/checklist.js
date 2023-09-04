    const tasks = [];


    function addTask() {
      const taskInput = document.getElementById("taskInput");
      const task = taskInput.value.trim();

      if (task !== "") {
        tasks.push(task);
        taskInput.value = "";
        renderTaskList();
      }
    }


    function renderTaskList() {
      const taskList = document.getElementById("taskList");
      taskList.innerHTML = "";

      tasks.forEach((task, index) => {
        const taskRow = document.createElement("div");
        taskRow.className = "task-row";

        const taskText = document.createElement("span");
        taskText.textContent = task;
        taskRow.appendChild(taskText);

        const updateButton = document.createElement("button");
        updateButton.className = "btn";
        updateButton.textContent = "Update";
        updateButton.addEventListener("click", () => UpdateTask(index));
        taskRow.appendChild(updateButton);

        const deleteButton = document.createElement("button");
        deleteButton.className = "btn";
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => deleteTask(index));
        taskRow.appendChild(deleteButton);

        taskList.appendChild(taskRow);
      });
    }


    function UpdateTask(index) {
      const newTask = prompt("Update the task:", tasks[index]);

      if (newTask !== null && newTask.trim() !== "") {
        tasks[index] = newTask.trim();
        renderTaskList();
      }
    }


    function deleteTask(index) {
      tasks.splice(index, 1);
      renderTaskList();
    }