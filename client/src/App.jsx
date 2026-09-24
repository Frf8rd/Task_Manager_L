import { useState } from "react";
import TaskForm from "./components/TaskForm";
import Task from "./components/Task";
import "../src/App.css";

let nextId = 1;

function App() {
  const [tasks, setTasks] = useState([]);

  const [filter, setFilter] = useState("all"); 

  const visibleTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
    });

  function addTask(title) {
    const newTask = { id: nextId++, title, completed: false };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  }

  function toggleTask(id) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  function deleteTask(id) {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  }

  const totalCount = tasks.length;
  const completedCount = tasks.filter((task) => task.completed).length;

  return (
    <main className="app">
      <h1>Task Manager</h1>
      <TaskForm onAddTask={addTask} />

      <div className="stats">
        <span>Total sarcini: {totalCount}</span>
        <span>Finalizate: {completedCount}</span>
      </div>

      {tasks.length === 0 ? (
        <p>Nu există sarcini momentan.</p>
      ) : (
        <ul>
          {visibleTasks.map((task) => (
            <Task key={task.id} task={task} onToggle={toggleTask} onDelete={deleteTask} />
          ))}
        </ul>
      )}
      <div className="filters">
        <button onClick={() => setFilter("all")}>Toate</button>
        <button onClick={() => setFilter("active")}>Active</button>
        <button onClick={() => setFilter("completed")}>Finalizate</button>
      </div>
    </main>
  );
}

export default App;