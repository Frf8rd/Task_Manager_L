import { useState } from "react";
import TaskForm from "./components/TaskForm";
import Task from "./components/Task";

let nextId = 1;

function App() {
  const [tasks, setTasks] = useState([]);

  function addTask(title) {
    const newTask = { id: nextId++, title, completed: false };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  }

  return (
    <main>
      <h1>Task Manager</h1>
      <TaskForm onAddTask={addTask} />

      <ul>
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </ul>
    </main>
  );
}

export default App;