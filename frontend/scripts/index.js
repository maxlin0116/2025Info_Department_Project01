const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const list = document.getElementById("todo-list");
const leftCounter = document.getElementById("left-counter");
const filterButtons = document.querySelectorAll(".filter");
const clearCompletedBtn = document.getElementById("clear-completed");

const API_BASE = "http://localhost:8000/api";

let todos = [];
let filter = "all";

function render() {
  list.innerHTML = "";
  const filtered = todos.filter((t) => {
    if (filter === "active") return !t.done;
    if (filter === "completed") return t.done;
    return true;
  });

  filtered.forEach((todo) => {
    const li = document.createElement("li");
    li.className = `todo-item ${todo.done ? "done" : ""}`;

    const text = document.createElement("span");
    text.className = "todo-text";
    text.textContent = todo.text;

    const actions = document.createElement("div");
    actions.className = "todo-actions";

    const toggleBtn = document.createElement("button");
    toggleBtn.className = "toggle-btn";
    toggleBtn.title = todo.done ? "Undo" : "Done";
    toggleBtn.onclick = () => toggleTodo(todo._id);

    const delBtn = document.createElement("button");
    delBtn.className = "delete-btn";
    delBtn.textContent = "×";
    delBtn.onclick = () => deleteTodo(todo._id);

    li.prepend(toggleBtn);
    actions.append(delBtn);
    li.append(text, actions);
    list.append(li);
  });

  const left = todos.filter((t) => !t.done).length;
  leftCounter.textContent = `${left} left`;
}

async function loadTodos() {
  const res = await fetch(`${API_BASE}/todos`);
  todos = await res.json();
  render();
}

async function addTodo() {
  const value = input.value.trim();
  if (!value) return;
  const res = await fetch(`${API_BASE}/todos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text: value })
  });
  const created = await res.json();
  todos.unshift(created);
  input.value = "";
  render();
}

async function toggleTodo(id) {
  const target = todos.find((t) => t._id === id);
  if (!target) return;
  const res = await fetch(`${API_BASE}/todos/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ done: !target.done })
  });
  const updated = await res.json();
  todos = todos.map((t) => (t._id === id ? updated : t));
  render();
}

async function deleteTodo(id) {
  await fetch(`${API_BASE}/todos/${id}`, { method: "DELETE" });
  todos = todos.filter((t) => t._id !== id);
  render();
}

async function clearCompleted() {
  await fetch(`${API_BASE}/todos`, { method: "DELETE" });
  todos = todos.filter((t) => !t.done);
  render();
}

addBtn.addEventListener("click", addTodo);
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addTodo();
});

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    filter = btn.dataset.filter;
    render();
  });
});

clearCompletedBtn.addEventListener("click", clearCompleted);

loadTodos();
