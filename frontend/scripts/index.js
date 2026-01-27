const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const list = document.getElementById("todo-list");
const leftCounter = document.getElementById("left-counter");
const filterButtons = document.querySelectorAll(".filter");
const clearCompletedBtn = document.getElementById("clear-completed");

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
    toggleBtn.onclick = () => toggleTodo(todo.id);

    const delBtn = document.createElement("button");
    delBtn.className = "delete-btn";
    delBtn.textContent = "×";
    delBtn.onclick = () => deleteTodo(todo.id);

    li.prepend(toggleBtn);
    actions.append(delBtn);
    li.append(text, actions);
    list.append(li);
  });

  const left = todos.filter((t) => !t.done).length;
  leftCounter.textContent = `${left} left`;
}

function addTodo() {
  const value = input.value.trim();
  if (!value) return;
  todos.push({ id: Date.now(), text: value, done: false });
  input.value = "";
  render();
}

function toggleTodo(id) {
  todos = todos.map((t) => (t.id === id ? { ...t, done: !t.done } : t));
  render();
}

function deleteTodo(id) {
  todos = todos.filter((t) => t.id !== id);
  render();
}

function clearCompleted() {
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

render();
