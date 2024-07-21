const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");

const savedTodos = JSON.parse(localStorage.getItem("todos") || []);

for (const todo of savedTodos) {
  addTodoList(todo);
}
function addTodo() {
  const todoText = todoInput.value.trim();
  if (todoText === "") return;

  const todo = {
    id: Date.now(),
    text: todoText,
    completed: false,
  };
  savedTodos.push(todo);
  localStorage.setItem("todos", JSON.stringify(savedTodos));
  addTodoList(todo);
  todoInput.value = "";
}

function toggleComplete(id) {
  const todo = savedTodos.find((todo) => todo.id === id);
  todo.completed
}

function addTodoList(todo) {
  const li = document.createElement("li");
  li.setAttribute("id", todo.id);
  li.innerHTML = `
<span title="${todo.text}">${todo.text}</span>
<button onclick="toggleComplete(${todo.id})"><i class="fa-solid fa-check"></i></button>
<button onclick="editTodo(${todo.id})"><i class="fa-solid fa-pen-to-square"></i></button>
<button onclick="removeTodo(${todo.id})"><i class="fa-solid fa-trash"></i></button>
  `;
  li.classList.toggle("completed", todo.completed);
  todoList.appendChild(li);
}
