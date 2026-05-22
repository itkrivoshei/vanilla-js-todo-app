const STORAGE_KEY = "vanilla-js-todo-app.todos";
const FILTERS = {
  ALL: "all",
  ACTIVE: "active",
  COMPLETED: "completed",
};

const selectors = {
  form: ".todo-form",
  input: ".todo-input",
  list: ".todo-list",
  count: ".todo-count",
  emptyState: ".empty-state",
  filterButton: ".filter-button",
  clearButton: ".clear-button",
  todo: ".todo",
  completeButton: ".complete-btn",
  trashButton: ".trash-btn",
};

const todoForm = document.querySelector(selectors.form);
const todoInput = document.querySelector(selectors.input);
const todoList = document.querySelector(selectors.list);
const todoCount = document.querySelector(selectors.count);
const emptyState = document.querySelector(selectors.emptyState);
const filterButtons = document.querySelectorAll(selectors.filterButton);
const clearButton = document.querySelector(selectors.clearButton);

let todos = loadTodos();
let currentFilter = FILTERS.ALL;

function createId() {
  if (window.crypto && typeof window.crypto.randomUUID === "function") {
    return window.crypto.randomUUID();
  }

  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function createTodo(text) {
  return {
    id: createId(),
    text,
    completed: false,
    createdAt: new Date().toISOString(),
  };
}

function normalizeTodo(todo) {
  if (typeof todo === "string") {
    return createTodo(todo);
  }

  return {
    id: todo.id || createId(),
    text: String(todo.text || "").trim(),
    completed: Boolean(todo.completed),
    createdAt: todo.createdAt || new Date().toISOString(),
  };
}

function loadTodos() {
  try {
    const savedTodos = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

    return savedTodos.map(normalizeTodo).filter((todo) => todo.text.length > 0);
  } catch {
    return [];
  }
}

function saveTodos() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}

function getVisibleTodos() {
  if (currentFilter === FILTERS.ACTIVE) {
    return todos.filter((todo) => !todo.completed);
  }

  if (currentFilter === FILTERS.COMPLETED) {
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

function removeTodo(id) {
  todos = todos.filter((todo) => todo.id !== id);
  saveTodos();
  renderTodos();
}

function deleteTodo(id) {
  const todoItem = todoList.querySelector(`[data-id="${id}"]`);

  if (!todoItem) {
    removeTodo(id);
    return;
  }

  todoItem.classList.add("fall");
  todoItem.addEventListener("transitionend", () => removeTodo(id), { once: true });
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
  const todoItem = event.target.closest(selectors.todo);

  if (!todoItem) {
    return;
  }

  if (event.target.closest(selectors.completeButton)) {
    toggleTodo(todoItem.dataset.id);
  }

  if (event.target.closest(selectors.trashButton)) {
    deleteTodo(todoItem.dataset.id);
  }
});

setFilter(currentFilter);
