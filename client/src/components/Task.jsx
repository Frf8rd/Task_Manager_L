function Task({ task }) {
  return (
    <li>
      <span>
        {task.completed ? "☑" : "☐"} {task.title}
      </span>
      <button type="button">Șterge</button>
    </li>
  );
}

export default Task;