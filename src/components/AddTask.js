import { RandomId } from "./RandomId";
import { TimeFormate } from "./TimeFormate";

export const AddTask = ({ todos, setTodos, task, setTask }) => {
  function handelSubmit(event) {
    event.preventDefault();
    let name = event.target.task.value;

    if (!name || !isNaN(name)) {
      alert("Give correct task name, not starting with a number.");
      event.target.task.value = "";
      return;
    }

    if (task.id) {
      const updatedTodo = todos.map((todo) =>
        todo.id === task.id
          ? { id: todo.id, name, date: TimeFormate() }
          : todo
      );
      setTodos(updatedTodo);
      setTask({});
    } else {
      const newTodo = {
        id: RandomId(),
        name,
        date: TimeFormate(),
      };
      setTodos([...todos, newTodo]);
      setTask({});
    }
  }

  return (
    <section className="addTask">
      <form onSubmit={handelSubmit}>
        <input
          type="text"
          name="task"
          id="task"
          value={task.name || ""}
          placeholder="Add Task"
          autoComplete="off"
          maxLength={25}
          required
          onChange={(e) => setTask({ ...task, name: e.target.value })}
        />
        <button type="submit" className="submitBtn">
          {task.id ? "Update" : "Add"}
        </button>
      </form>
    </section>
  );
};
