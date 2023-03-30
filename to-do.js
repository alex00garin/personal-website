// Selecting the form and task elements
const form = document.querySelector('form');
const taskList = document.querySelector('#task-list');


// Creating an empty array to store the tasks
let tasks = [];


// Adding a submit event listener to the form
form.addEventListener('submit', (event) => {
  event.preventDefault(); //prevent page reload on submit
  const taskInput = event.target.elements[0];
  const taskName = taskInput.value.trim();
  
   // Getting the task input element and value
  if (taskName.trim() === '') {
  alert('Please enter a task!');
  return;
}

// Creating a task object with a name and completion status
const task = {
  name: taskName,
  completed: false
};

// Adding the task object to the tasks array and resetting the task input value
tasks.push(task);
taskInput.value = '';

// Displaying the updated list of tasks
displayTasks();
});


// Function to display the tasks
function displayTasks() {
  // Clearing the task list HTML
  taskList.innerHTML = '';

  // Looping through the tasks array and creating HTML elements for each task
  tasks.forEach(function(task, index) {
    const taskItem = document.createElement('li');
    const taskCheckbox = document.createElement('input');
    taskCheckbox.type = 'checkbox';
    taskCheckbox.checked = task.completed;

    // Adding an event listener to the checkbox to toggle the completion status 
    // and display the updated list
    taskCheckbox.addEventListener('change', function() {
      task.completed = !task.completed;
      displayTasks();
    });

    const taskName = document.createElement('span');
    taskName.textContent = task.name;

    // Adding a delete button for each task and attaching an event listener 
    // to remove the task from the array and display the updated list
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
      tasks.splice(index, 1);
      displayTasks();
    });

    // Adding a unique ID to the task item
    taskItem.id = 'task-' + index;

  // Appending the task HTML elements to the task list
  taskItem.appendChild(taskCheckbox);
  taskItem.appendChild(taskName);
  taskItem.appendChild(deleteButton);
  taskList.appendChild(taskItem);
});
}


// Displaying the initial list of tasks when the page loads
displayTasks();
