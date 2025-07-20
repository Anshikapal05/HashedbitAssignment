import React, { useState, useEffect } from "react";
import "./Todo.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [message, setMessage] = useState("");

  // Load from localStorage on first render
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("todos")) || [];
    setTasks(savedTasks);
  }, []);

  // Save to localStorage on change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    const trimmed = task.trim();
    if (trimmed === "") {
      setMessage("Task cannot be empty.");
      return;
    }
    if (tasks.includes(trimmed)) {
      setMessage("Task already exists.");
      return;
    }
    const updated = [...tasks, trimmed].sort();
    setTasks(updated);
    setTask("");
    setMessage("Task added!");
    setTimeout(() => setMessage(""), 2000);
  };

  const deleteTask = (taskToDelete) => {
    const updated = tasks.filter((t) => t !== taskToDelete);
    setTasks(updated);
    setMessage("Task deleted!");
    setTimeout(() => setMessage(""), 2000);
  };

  return (
    <div className="container">
      <h1>📝 Todo List</h1>

      <input
        type="text"
        value={task}
        placeholder="Enter a task..."
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && addTask()}
      />
      <button onClick={addTask}>Add Task</button>

      {message && <p className="message">{message}</p>}

      <ul>
        {tasks.map((t, index) => (
          <li key={index}>
            <span>{t}</span>
            <button className="delete" onClick={() => deleteTask(t)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
