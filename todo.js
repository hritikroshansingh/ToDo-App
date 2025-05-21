let todoList = JSON.parse(localStorage.getItem('todoList')) || [];

displayItems();

function addTask() {
  let inputElement = document.querySelector('#todo-input');
  let dateElement = document.querySelector('#todo-date');
  let todoItem = inputElement.value.trim();
  let todoDate = dateElement.value;

  if (!todoItem || !todoDate) {
    alert('Please enter both task and due date.');
    return;
  }

  todoList.push({ item: todoItem, dueDate: todoDate });
  localStorage.setItem('todoList', JSON.stringify(todoList));  // Save to localStorage
  inputElement.value = '';
  dateElement.value = '';
  displayItems();
}

function displayItems() {
  let containerElement = document.querySelector('.todo-container');
  let newHtml = '';

  for (let i = 0; i < todoList.length; i++) {
    let { item, dueDate } = todoList[i];
    newHtml += `
      <div class="each-element">
        <span>${item}</span>
        <span>${dueDate}</span>
        <button onclick="deleteTask(${i})">Delete</button>
      </div>
    `;
  }

  containerElement.innerHTML = newHtml;
}

function deleteTask(index) {
  todoList.splice(index, 1);
  localStorage.setItem('todoList', JSON.stringify(todoList)); // Update localStorage
  displayItems();
}

flatpickr("#todo-date", {
  dateFormat: "Y/m/d" // This will show as yyyy/mm/dd
});
