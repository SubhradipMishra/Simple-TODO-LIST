


function showTask() {
  const form = document.getElementById('fo');
  const taskInput = document.getElementById('task');
  const content = document.getElementById('content');

  const taskText = taskInput.value.trim();
  if (taskText !== '') {
      const taskItem = document.createElement('li'); //li

      const taskDescription = document.createElement('h4'); //h5
      taskDescription.textContent = taskText; 
      taskItem.appendChild(taskDescription);

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.className = 'check';
      checkbox.onclick = () => {
          if (checkbox.checked) {
              taskDescription.style.textDecoration = 'line-through';
          } else {
              taskDescription.style.textDecoration = 'none';
          }
      };
      taskItem.appendChild(checkbox);

      const deleteButton = document.createElement('i');
      deleteButton.className = 'fa fa-close close';
      deleteButton.onclick = () => {
          content.removeChild(taskItem);
      };
      taskItem.appendChild(deleteButton);

      content.appendChild(taskItem);
      taskInput.value = ''; // Clear input field
  }
}
