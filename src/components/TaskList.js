export const TaskList = ({ todos, setTodos, setTask }) => {
  // Delete Task
  function handleDelete(id) {
    const newTodoList = todos.filter((todo) => todo.id !== id);
    setTodos(newTodoList);
  }

  // Edit Task
  function handleEdit(id) {
    const selectTodo = todos.find((todo) => todo.id === id);
    setTask(selectTodo);
  }

  return (
    <section className="taskList">
      <div className="top">
        <p>
          <span className="title me-2">Task</span>
          <span className="count badge">{todos.length}</span>
        </p>
        <button className="clean-all" onClick={() => setTodos([])}>
          Clear All
        </button>
      </div>

      <ul className="bottom">
        {todos.map((todo) => (
          <li
            className="taskCard row border-start border-4 border-primary"
            key={todo.id}
          >
            <span className="left col-8">
              <span className="name">{todo.name}</span>
              <span className="date-time">{todo.date}</span>
            </span>

            <span className="right col-4 text-center">
              <i
                className="bi bi-pencil-square text-success"
                onClick={() => handleEdit(todo.id)}
              ></i>
              <i
                className="bi bi-trash3 text-danger"
                onClick={() => handleDelete(todo.id)}
              ></i>
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};
