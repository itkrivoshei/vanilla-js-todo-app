const STORAGE_KEY = "vanilla-js-todo-app.todos";

const todoForm = document.querySelector(".todo-form");
const todoInput = document.querySelector(".todo-input");
const todoList = document.querySelector(".todo-list");
const todoCount = document.querySelector(".todo-count");
const emptyState = document.querySelector(".empty-state");
const filterButtons = document.querySelectorAll(".filter-button");
const clearButton = document.querySelector(".clear-button");

let todos = loadTodos();
let currentFilter = "all";

function createTodo(text) {
  return {
    id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
    text,
    completed: false,
    createdAt: new Date().toISOString(),
  };
}

function loadTodos() {
  try {
    const savedTodos = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

    return savedTodos.map((todo) => {
      if (typeof todo === "string") {
        return createTodo(todo);
      }

      return todo;
    });
  } catch {
    return [];
  }
}

function saveTodos() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}

function getVisibleTodos() {
  if (currentFilter === "active") {
    return todos.filter((todo) => !todo.completed);
  }

  if (currentFilter === "completed") {
    return todos.filter((todo) => todo.completed);
  }

  return todos;
}

function updateMeta() {
  const activeCount = todos.filter((todo) => !todo.completed).length;
  const taskLabel = activeCount === 1 ? "task" : "tasks";

  todoCount.textContent = `${activeCount} ${taskLabel} left`;
  emptyState.classList.toggle("visible", getVisibleTodos().length === 0);
}

function renderTodo(todo) {
  const todoItem = document.createElement("li");
  todoItem.className = `todo${todo.completed ? " completed" : ""}`;
  todoItem.dataset.id = todo.id;

  const statusDot = document.createElement("span");
  statusDot.className = "status-dot";
  statusDot.setAttribute("aria-hidden", "true");

  const todoText = document.createElement("span");
  todoText.className = "todo-text";
  todoText.textContent = todo.text;

  const completeButton = document.createElement("button");
  completeButton.type = "button";
  completeButton.className = "todo-action complete-btn";
  completeButton.textContent = "✓";
  completeButton.setAttribute("aria-label", todo.completed ? "Mark task as active" : "Mark task as completed");

  const trashButton = document.createElement("button");
  trashButton.type = "button";
  trashButton.className = "todo-action trash-btn";
  trashButton.textContent = "×";
  trashButton.setAttribute("aria-label", "Delete task");

  todoItem.append(statusDot, todoText, completeButton, trashButton);

  return todoItem;
}

function renderTodos() {
  todoList.replaceChildren(...getVisibleTodos().map(renderTodo));
  updateMeta();
}

function addTodo(event) {
  event.preventDefault();

  const text = todoInput.value.trim();

  if (!text) {
    todoInput.focus();
    return;
  }

  todos.unshift(createTodo(text));
  todoInput.value = "";
  saveTodos();
  renderTodos();
}

function toggleTodo(id) {
  todos = todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  saveTodos();
  renderTodos();
}

function deleteTodo(id) {
  const todoItem = todoList.querySelector(`[data-id="${id}"]`);

  if (todoItem) {
    todoItem.classList.add("fall");
    todoItem.addEventListener(
      "transitionend",
      () => {
        todos = todos.filter((todo) => todo.id !== id);
        saveTodos();
        renderTodos();
      },
      { once: true },
    );
    return;
  }

  todos = todos.filter((todo) => todo.id !== id);
  saveTodos();
  renderTodos();
}

function clearCompleted() {
  todos = todos.filter((todo) => !todo.completed);
  saveTodos();
  renderTodos();
}

function setFilter(filter) {
  currentFilter = filter;

  filterButtons.forEach((button) => {
    const isActive = button.dataset.filter === filter;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  renderTodos();
}

todoForm.addEventListener("submit", addTodo);

clearButton.addEventListener("click", clearCompleted);

filterButtons.forEach((button) => {
  button.addEventListener("click", () => setFilter(button.dataset.filter));
});

todoList.addEventListener("click", (event) => {
  const todoItem = event.target.closest(".todo");

  if (!todoItem) {
    return;
  }

  if (event.target.closest(".complete-btn")) {
    toggleTodo(todoItem.dataset.id);
  }

  if (event.target.closest(".trash-btn")) {
    deleteTodo(todoItem.dataset.id);
  }
});

renderTodos();
