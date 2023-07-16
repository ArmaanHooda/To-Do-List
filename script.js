document.getElementById("taskForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    var taskInput = document.getElementById("taskInput").value;
    var prioritySelect = document.getElementById("prioritySelect").value;
    var deadlineInput = document.getElementById("deadlineInput").value;
  
    if (taskInput === "") {
      alert("Please enter a task");
      return;
    }
  
    var taskElement = document.createElement("div");
    taskElement.classList.add("task");
  
    var taskTitleElement = document.createElement("span");
    taskTitleElement.classList.add("task-title");
    taskTitleElement.textContent = taskInput;
  
    var taskPriorityElement = document.createElement("span");
    taskPriorityElement.classList.add("task-priority");
    taskPriorityElement.textContent = "Priority: " + prioritySelect;
  
    var taskDeadlineElement = document.createElement("span");
    taskDeadlineElement.classList.add("task-deadline");
    taskDeadlineElement.textContent = "Deadline: " + deadlineInput;
  
    var editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.classList.add("edit-button");
  
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-button");
  
    deleteButton.addEventListener("click", function() {
      taskElement.remove();
    });
  
    editButton.addEventListener("click", function() {
      editTask(taskElement, taskTitleElement, taskPriorityElement, taskDeadlineElement);
    });
  
    taskElement.appendChild(taskTitleElement);
    taskElement.appendChild(taskPriorityElement);
    taskElement.appendChild(taskDeadlineElement);
    taskElement.appendChild(editButton);
    taskElement.appendChild(deleteButton);
  
    var taskListElement = document.getElementById("taskList");
    taskListElement.appendChild(taskElement);
  
    document.getElementById("taskForm").reset();
  });
  
  function editTask(taskElement, taskTitleElement, taskPriorityElement, taskDeadlineElement) {
    var taskTitle = taskTitleElement.textContent;
    var taskPriority = taskPriorityElement.textContent.replace("Priority: ", "");
    var taskDeadline = taskDeadlineElement.textContent.replace("Deadline: ", "");
  
    var editForm = document.createElement("form");
    editForm.classList.add("edit-form");
  
    var editTaskInput = document.createElement("input");
    editTaskInput.type = "text";
    editTaskInput.value = taskTitle;
    editTaskInput.classList.add("edit-task-input");
  
    var editPrioritySelect = document.createElement("select");
    editPrioritySelect.classList.add("edit-priority-select");
  
    var priorities = ["Low", "Medium", "High"];
  
    for (var i = 0; i < priorities.length; i++) {
      var option = document.createElement("option");
      option.value = priorities[i].toLowerCase();
      option.text = priorities[i];
      if (priorities[i].toLowerCase() === taskPriority.toLowerCase()) {
        option.selected = true;
      }
      editPrioritySelect.appendChild(option);
    }
  
    var editDeadlineInput = document.createElement("input");
    editDeadlineInput.type = "date";
    editDeadlineInput.value = taskDeadline;
    editDeadlineInput.classList.add("edit-deadline-input");
  
    var updateButton = document.createElement("button");
    updateButton.textContent = "Update";
    updateButton.classList.add("update-button");
  
    updateButton.addEventListener("click", function(event) {
      event.preventDefault();
      var updatedTaskTitle = editTaskInput.value;
      var updatedTaskPriority = editPrioritySelect.value;
      var updatedTaskDeadline = editDeadlineInput.value;
  
      if (updatedTaskTitle === "") {
        alert("Please enter a task");
        return;
      }
  
      taskTitleElement.textContent = updatedTaskTitle;
      taskPriorityElement.textContent = "Priority: " + updatedTaskPriority;
      taskDeadlineElement.textContent = "Deadline: " + updatedTaskDeadline;
  
      editForm.remove();
      taskElement.style.display = "flex";
    });
  
    var cancelButton = document.createElement("button");
    cancelButton.textContent = "Cancel";
    cancelButton.classList.add("cancel-button");
  
    cancelButton.addEventListener("click", function(event) {
      event.preventDefault();
      editForm.remove();
      taskElement.style.display = "flex";
    });
  
    editForm.appendChild(editTaskInput);
    editForm.appendChild(editPrioritySelect);
    editForm.appendChild(editDeadlineInput);
    editForm.appendChild(updateButton);
    editForm.appendChild(cancelButton);
  
    taskElement.style.display = "none";
    taskElement.parentElement.insertBefore(editForm, taskElement);
  }
  
  
  
  