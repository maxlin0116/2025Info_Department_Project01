import { useEffect, useMemo, useState } from "react";
import "./App.css";

const API_BASE = "http://localhost:8000/api";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");
  const [input, setInput] = useState("");

  useEffect(() => {
    fetch(`${API_BASE}/todos`)
      .then((r) => r.json())
      .then(setTodos);
  }, []);

  const leftCount = useMemo(
    () => todos.filter((t) => !t.done).length,
    [todos]
  );

  const filtered = useMemo(() => {
    if (filter === "active") return todos.filter((t) => !t.done);
    if (filter === "completed") return todos.filter((t) => t.done);
    return todos;
  }, [todos, filter]);

  const addTodo = async () => {
    const text = input.trim();
    if (!text) return;
    const res = await fetch(`${API_BASE}/todos`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });
    const created = await res.json();
    setTodos((prev) => [created, ...prev]);
    setInput("");
  };

  const toggleTodo = async (id) => {
    const target = todos.find((t) => t._id === id);
    if (!target) return;
    const res = await fetch(`${API_BASE}/todos/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ done: !target.done }),
    });
    const updated = await res.json();
    setTodos((prev) => prev.map((t) => (t._id === id ? updated : t)));
  };

  const deleteTodo = async (id) => {
    await fetch(`${API_BASE}/todos/${id}`, { method: "DELETE" });
    setTodos((prev) => prev.filter((t) => t._id !== id));
  };

  const clearCompleted = async () => {
    await fetch(`${API_BASE}/todos`, { method: "DELETE" });
    setTodos((prev) => prev.filter((t) => !t.done));
  };

  return (
    <main className="todo-app">
      <h1 className="title">todos</h1>
      <div className="app-card">
        <div className="input-row">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addTodo()}
            placeholder="What needs to be done?"
          />
          <button onClick={addTodo} className="hidden-btn">Add</button>
        </div>

        <ul className="todo-list">
          {filtered.map((todo) => (
            <li key={todo._id} className={`todo-item ${todo.done ? "done" : ""}`}>
              <button className="toggle-btn" onClick={() => toggleTodo(todo._id)} />
              <span className="todo-text">{todo.text}</span>
              <div className="todo-actions">
                <button className="delete-btn" onClick={() => deleteTodo(todo._id)}>
                  ×
                </button>
              </div>
            </li>
          ))}
        </ul>

        <div className="footer">
          <span>{leftCount} left</span>
          <div className="filters">
            {[
              { id: "all", label: "All" },
              { id: "active", label: "Active" },
              { id: "completed", label: "Completed" },
            ].map((f) => (
              <button
                key={f.id}
                className={`filter ${filter === f.id ? "active" : ""}`}
                onClick={() => setFilter(f.id)}
              >
                {f.label}
              </button>
            ))}
          </div>
          <button className="clear-btn" onClick={clearCompleted}>
            Clear completed
          </button>
        </div>
      </div>
    </main>
  );
}
