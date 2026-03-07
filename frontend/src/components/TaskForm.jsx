import { useState } from "react";
import { useTaskContext } from "../hooks/useTasksContext";
import { useAuthContext } from "../hooks/useAuthContext";

const TaskForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [error, setError] = useState(null);
  const { dispatch } = useTaskContext();
    const { user } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
if (!user) {
      setError("You must be logged in");
      return;
    }
    const task = { title, description, date };

    const response = await fetch("http://localhost:4000/api/tasks", {
      method: "POST",
      body: JSON.stringify(task),
      headers: {
        "Content-Type": "application/json",
         Authorization: `Bearer ${user.token}`,
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setError(null);
      setTitle("");
      setDescription("");
      setDate("");
      console.log("new task added:", json);
      dispatch({ type: "CREATE_TASK", payload: json});
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a New Task</h3>

      <label>Task Title*:</label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />

      <label>Description:</label>
      <input
        type="text"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />

      <label>Deadline*:</label>
      <input
        type="date"
        onChange={(e) => setDate(e.target.value)}
        value={date}
      />

      <button>Add Task</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default TaskForm;
