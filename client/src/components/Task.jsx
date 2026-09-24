function Task({ task, onToggle, onDelete }) {
  return (
    <li className={task.completed ? "task--done" : ""}>
      <label>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />
        {task.title}
      </label>
      <button type="button" onClick={() => onDelete(task.id)}>
        Șterge
      </button>
    </li>
  );
}

export default Task;