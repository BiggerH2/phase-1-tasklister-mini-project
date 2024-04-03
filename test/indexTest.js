document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('create-task-form');
  const taskList = document.getElementById('task-list');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim(); // Get task description

    if (taskText !== '') {
      addTaskToList(taskText);
      taskInput.value = ''; // Clear input field after adding task
    }
  });

  function addTaskToList(taskText) {
    const li = document.createElement('li');
    li.textContent = taskText;
    
    // Add delete button to each task
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', function() {
      li.remove();
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  }
});
